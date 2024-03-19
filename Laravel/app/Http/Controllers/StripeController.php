<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\CartProduct;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class StripeController extends Controller
{
    public function makePayment(Request $request)
    {
   

            $user = JWTAuth::parseToken()->authenticate();
            $cart = Cart::where('user_id', $user->id)->first();

            if (!$cart) {
                return response()->json(['error' => 'Cart not found'], 404);
            }

            $cartProducts = CartProduct::where('cart_id', $cart->id)->get();

            $totalCartPrice = $cartProducts->sum('total_product_price');


    }
}
