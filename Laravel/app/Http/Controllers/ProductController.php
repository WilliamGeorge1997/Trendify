<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\Validator;
use App\Models\Image;
use Illuminate\Support\Facades\Storage;
use Tymon\JWTAuth\Facades\JWTAuth;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with('images')->get();
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
    }


    public function store(ProductRequest $request)
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();

            $product = Product::create([
                'title' => $request->title,
                'price' => $request->price,
                'location' => $request->location,
                'description' => $request->description,
                'user_id' => $user->id,
                'category_id' => $request->category_id,
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

    public function destroy(string $id)
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();

            $product = Product::with('images')->find($id);

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
