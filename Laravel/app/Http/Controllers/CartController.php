<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cart;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Validator;
use App\Models\Product;
use App\Models\CartProduct;
use Illuminate\Database\UniqueConstraintViolationException;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\ModelNotFoundException;


class CartController extends Controller
{
    public function showCart()
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();
        } catch (\Exception $e) {
            return response()->json(['status' => 401, 'message' => 'Unauthorized'], 401);
        }

        $cart = Cart::where('user_id', $user->id)->first();

        if (!$cart) {
            return response()->json(['status' => 'success', 'message' => 'Your cart is empty'], 200);
        }

        $cartProducts = $cart->cartProducts()->with('product')->get();

        $totalCartPrice = $cartProducts->sum('total_product_price');
        $totalCount = CartProduct::where('cart_id', $cart->id)->sum('count');

        return response()->json([
            'status' => 'success',
            'message' => 'Cart retrieved successfully',
            'cart_products' => $cartProducts,
            'total_count' => $totalCount,
            'total_cart_price' => $totalCartPrice,
        ], 200);
    }

    public function addCart(Request $request)
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();
        } catch (\Exception $e) {
            return response()->json(['status' => 401, 'message' => 'Unauthorized'], 401);
        }
    
        $validator = Validator::make($request->all(), [
            'product_id' => 'required|exists:products,id',
        ]);
    
        if ($validator->fails()) {
            return response()->json(['status' => 400, 'message' => $validator->errors()->first()], 400);
        }
    
        $product = Product::findOrFail($request->product_id);
    
        $cart = Cart::firstOrCreate(['user_id' => $user->id]);
        try {
    
            $cartProduct = CartProduct::create([
                'cart_id' => $cart->id,
                'product_id' => $request->product_id,
                'total_product_price' => $product->price,
                'count' => 1,
            ]);
            $totalCartPrice = CartProduct::where('cart_id', $cart->id)->sum('total_product_price');
            $totalCount = CartProduct::where('cart_id', $cart->id)->sum('count');
    
            return response()->json([
                'status' => 'success',
                'message' => 'Product added successfully to your cart',
                'cart_product' => $cartProduct,
                'total_count' => $totalCount,
                'total_cart_price' => $totalCartPrice,
            ], 200);
        } catch (UniqueConstraintViolationException $e) {
    
            return response()->json([
                'status' => 'error',
                'message' => 'This product is already in your cart',
            ], 400);
        } catch (\Exception $e) {
    
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to add product to cart',
            ],500);
    
    }
    }
    
    public function updateCartProductCount(Request $request, string $productId, string $action)
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();
        } catch (\Exception $e) {
            return response()->json(['status' => 401, 'message' => 'Unauthorized'], 401);
        }

        try {
            $cart = Cart::where('user_id', $user->id)->first();
            if (!$cart) {
                return response()->json(['status' => 'error', 'message' => 'Cart not found'], 404);
            }

            $cartProduct = CartProduct::where('cart_id', $cart->id)
                ->where('product_id', $productId)
                ->first();

            if (!$cartProduct) {
                return response()->json(['status' => 'error', 'message' => 'Product not found in the cart'], 404);
            }

            if ($action === 'increment') {
                // Increment count by 1
                $updatedCartProduct = DB::table('cart_products')
                    ->where('cart_id', $cart->id)
                    ->where('product_id', $productId)
                    ->update([
                        'count' => DB::raw('count + 1'),
                        'total_product_price' => DB::raw('(SELECT price FROM products WHERE id = ' . $productId . ') * (count)')
                    ]);
            } elseif ($action === 'decrement') {
                if ($cartProduct->count > 1) {
                    $updatedCartProduct = DB::table('cart_products')
                        ->where('cart_id', $cart->id)
                        ->where('product_id', $productId)
                        ->update([
                            'count' => DB::raw('count - 1'),
                            'total_product_price' => DB::raw('(SELECT price FROM products WHERE id = ' . $productId . ') * (count)')
                        ]);
                } else {
                    $deleted = DB::table('cart_products')
                        ->where('cart_id', $cart->id)
                        ->where('product_id', $productId)
                        ->delete();

                    if (!$deleted) {
                        return response()->json(['status' => 'error', 'message' => 'Failed to delete product from cart'], 500);
                    }

                    $cartProductCount = CartProduct::where('cart_id', $cart->id)->count();
                    if ($cartProductCount === 0) {
                        $cart->delete();
                        return response()->json(['status' => 'success', 'message' => 'Cart removed because it is empty'], 200);
                    }
                    return response()->json(['status' => 'success', 'message' => 'Product removed from cart'], 200);
                }
            } else {
                return response()->json(['status' => 'error', 'message' => 'Invalid action'], 400);
            }

            $cartProduct = CartProduct::where('cart_id', $cart->id)->where('product_id', $productId)->first();
            $totalCartPrice = CartProduct::where('cart_id', $cart->id)->sum('total_product_price');

            $totalCount = CartProduct::where('cart_id', $cart->id)->sum('count');

            return response()->json([
                'status' => 'success',
                'message' => 'Cart product count updated successfully',
                'cart_product' => $updatedCartProduct ?? $cartProduct,
                'total_count' => $totalCount,
                'total_cart_price' => $totalCartPrice,
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to update cart product count: ' . $e->getMessage(),
            ], 500);
        }
    }

    public function deleteCartProduct(string $productId)
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();
        } catch (\Exception $e) {
            return response()->json(['status' => 401, 'message' => 'Unauthorized'], 401);
        }

        try {
            $cart = Cart::where('user_id', $user->id)->first();

            if (!$cart) {
                return response()->json(['status' => 'error', 'message' => 'Cart not found'], 404);
            }

            $cartProduct = CartProduct::where('cart_id', $cart->id)
                ->where('product_id', $productId)
                ->first();

            if (!$cartProduct) {
                return response()->json(['status' => 'error', 'message' => 'Product not found in the cart'], 404);
            }

            $deleted = CartProduct::where('cart_id', $cart->id)
                ->where('product_id', $productId)
                ->delete();

            if (!$deleted) {
                return response()->json(['status' => 'error', 'message' => 'Failed to delete product from cart'], 500);
            }

            $remainingProductsCount = CartProduct::where('cart_id', $cart->id)->count();

            if ($remainingProductsCount === 0) {
                $cart->delete();
            }

            $totalCartPrice = CartProduct::where('cart_id', $cart->id)->sum('total_product_price');
            $totalCount = CartProduct::where('cart_id', $cart->id)->sum('count');
            return response()->json([
                'status' => 'success',
                'message' => 'Product deleted successfully from the cart',
                'cart_product' => $cartProduct,
                'total_cart_price' => $totalCartPrice,
                'total_count' => $totalCount
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to delete product from cart: ' . $e->getMessage(),
            ], 500);
        }
    }

    public function deleteCart()
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();
        } catch (\Exception $e) {
            return response()->json(['status' => 401, 'message' => 'Unauthorized'], 401);
        }

        $cart = Cart::where('user_id', $user->id)->first();

        if (!$cart) {
            return response()->json(['status' => 'success', 'message' => 'Cart not found'], 404);
        }

        $cart->cartProducts()->delete();
        $cart->delete();

        return response()->json(['status' => 'success', 'message' => 'Cart deleted successfully'], 200);
    }
}
