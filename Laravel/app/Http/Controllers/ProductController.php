<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\Validator;
use App\Models\Image;
use Illuminate\Support\Facades\Storage;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Models\User;
use Illuminate\Support\Collection;

class ProductController extends Controller
{

    public function index()
    {
        try {
            $products = Product::with(['images' => function ($query) {
                $query->select('product_id', 'image_path');
            }, 'EgyptCity', 'user'])->get();


            if ($products->count() > 0) {
                $data = [
                    'status' => 200,
                    'products' => $products
                ];
                return response()->json($data, 200);
            } else {
                $data = [
                    'status' => 404,
                    'message' => 'No products found'
                ];
                return response()->json($data, 404);
            }
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to fetch products: ' . $e->getMessage(),
            ], 500);
        }
    }


    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'title' => 'required|string|max:255',
                'price' => 'required|numeric|min:0',
                'location_id' => 'string|max:255',
                'description' => 'required|string',
                'category_id' => 'required|exists:categories,id',
                'images.*' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048'
            ]);

            $user = JWTAuth::parseToken()->authenticate();

            $product = Product::create([
                'title' => $validatedData['title'],
                'price' => $validatedData['price'],
                'location_id' => $validatedData['location_id'],
                'description' => $validatedData['description'],
                'user_id' => $user->id,
                'category_id' => $validatedData['category_id'],
            ]);


            if ($product) {
                $imageUrls = [];

                if ($request->hasFile('images')) {
                    foreach ($request->file('images') as $image) {
                        $imageName = uniqid() . '.' . $image->getClientOriginalExtension();
                        $image->storeAs('public/images', $imageName);

                        $productImage = Image::create([
                            'product_id' => $product->id,
                            'image_path' => 'images/' . $imageName,
                        ]);
                        $imageUrls[] = $imageName;
                    }
                }
                return response()->json(['success' => true, 'message' => 'Product Created Successfully', 'product' => $product, 'image_urls' => $imageUrls], 200);
            } else {
                return response()->json(['error' => 'An error occurred while creating product'], 400);
            }
        } catch (\Exception $e) {
            return response()->json(['error' => 'An error occurred while creating product: ' . $e->getMessage()], 400);
        }
    }


    public function show(string $id)
    {
        try {

            $product = Product::with(['images', 'EgyptCity', 'user'])->find($id);
            if ($product) {
                return response()->json([
                    'status' => 200,
                    'message' => $product,
                ], 200);
            } else {
                return response()->json([
                    'status' => 404,
                    'message' => 'Product not found',
                ], 404);
            }
        } catch (\Exception $e) {
            return response()->json([
                'status' => 401,
                'message' => 'Unauthorized',
            ], 401);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $product = Product::findOrFail($id);
    
            $user = JWTAuth::parseToken()->authenticate();
            if ($user->id !== $product->user_id) {
                return response()->json(['error' => 'Unauthorized'], 401);
            }
    
            $originalImageUrls = $product->images->pluck('image_path')->toArray();
            $originalData = $product->toArray();
    
            $product->update($request->all());
    
            $imageUrls = [];
            if ($request->hasFile('images')) {
                $product->images()->delete();
                
                foreach ($request->file('images') as $image) {
                    $imageName = uniqid() . '.' . $image->getClientOriginalExtension();
                    $image->storeAs('public/images', $imageName);
    
                    $productImage = Image::create([
                        'product_id' => $product->id,
                        'image_path' => 'images/' . $imageName,
                    ]);
                    $imageUrls[] = $imageName;
                }
            } else {
                $imageUrls = $originalImageUrls;
            }
    
            if (empty($request->all())) {
                $updatedData = $originalData;
            } else {
                $updatedData = $product->toArray();
            }
    
            return response()->json(['success' => true, 'message' => 'Product updated successfully', 'product' => $updatedData, 'image_urls' => $imageUrls], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'An error occurred while updating the product: ' . $e->getMessage()], 400);
        }
    }


    public function destroy(string $id)
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();

            $product = Product::with('images', 'EgyptCity')->find($id);

            if ($product) {
                if ($product->user_id != $user->id) {
                    return response()->json([
                        'status' => 403,
                        'message' => 'You are not authorized to delete this product',
                    ], 403);
                }

                $product->delete();

                return response()->json([
                    'status' => 200,
                    'message' => 'Product deleted successfully',
                ], 200);
            } else {
                return response()->json([
                    'status' => 404,
                    'message' => 'No such product found',
                ], 404);
            }
        } catch (\Exception $e) {
            return response()->json([
                'status' => 500,
                'message' => 'An error occurred: ' . $e->getMessage(),
            ], 500);
        }
    }
}
