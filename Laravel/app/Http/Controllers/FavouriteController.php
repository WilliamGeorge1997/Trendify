<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Favourite;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Exceptions\JWTException;

class FavouriteController extends Controller
{
    public function store(Request $request)
    {
        try {

            if (!Auth::check()) {
                return response()->json(['message' => 'Unauthorized. User must be logged in.'], 401);
            }


            $user = JWTAuth::parseToken()->authenticate();


            $product = Product::find($request->product_id);
            if (!$product) {
                return response()->json(['message' => 'Product not found.'], 404);
            }


            if ($user->favourites()->where('product_id', $request->product_id)->exists()) {
                return response()->json(['message' => 'Product already added to favourites.'], 409);
            }


            $favouriteProduct = new Favourite();
            $favouriteProduct->user_id = $user->id;
            $favouriteProduct->product_id = $request->product_id;
            $favouriteProduct->save();

            return response()->json(['message' => 'Product added to favourites'], 200);
        } catch (JWTException $e) {
            return response()->json(['message' => 'Token absent'], 500);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Internal Server Error'], 500);
        }
    }




    public function userFavourites()
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();

            $favoriteProducts = $user->favouriteProducts()->with('images')->get();

            if ($favoriteProducts->isEmpty()) {
                return response()->json(['message' => 'No favorite products found.'], 404);
            }

            $user->favorite_products = $favoriteProducts;

            return response()->json(['user' => $user], 200);
        } catch (JWTException $e) {

            return response()->json(['message' => 'Token absent or invalid.'], 401);
        } catch (\Exception $e) {

            return response()->json(['message' => 'Failed to retrieve favorite products.'], 500);
        }
    }


    public function removeFavoriteProduct($productId)
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();

            $product = Product::find($productId);

            if (!$product) {
                return response()->json(['message' => 'Product not found.'], 404);
            }

            $user->favouriteProducts()->detach($product->id);

            return response()->json(['message' => 'Product removed from favorites successfully.'], 200);
        } catch (JWTException $e) {

            return response()->json(['message' => 'Token absent or invalid.'], 401);
        } catch (\Exception $e) {

            return response()->json(['message' => 'Failed to remove product from favorites.'], 500);
        }
    }
}
