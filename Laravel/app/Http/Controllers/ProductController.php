<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\Validator;
use App\Models\Image;
use Illuminate\Support\Facades\Storage;

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
            $product = Product::create([
                'title' => $request->title,
                'price' => $request->price,
                'location' => $request->location,
                'description' => $request->description,
                'user_id' => $request->user_id,
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
                return response()->json(['success' => true, 'message' => 'Prodcut Created Successfully', 'product' => $product, 'image_urls' => $imageUrls], 200);
            } else {
                return response()->json(['error' => 'An error occurred while creating product'], 400);
            }
        } catch (\Exception $e) {
            return response()->json(['error' => 'An error occurred while creating product: ' . $e->getMessage()], 400);
        }
    }



    public function destroy(string $id)
    {
        $product = Product::with('images')->find($id);
        if ($product) {
            $product->delete();
            return response()->json([
                'status' => 200,
                'message' => 'product deleted successfully',
            ], 200);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No such an product found',
            ]);
        }
    }
}
