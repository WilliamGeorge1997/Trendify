<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\CartProduct;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Models\Payment;

class StripeController extends Controller
{
    public function makePayment(Request $request)
    {
        try {

            $user = JWTAuth::parseToken()->authenticate();
            $cart = Cart::where('user_id', $user->id)->first();

            if (!$cart) {
                return response()->json(['error' => 'Cart not found'], 404);
            }

            $cartProducts = CartProduct::where('cart_id', $cart->id)->get();

            $totalCartPrice = $cartProducts->sum('total_product_price');

            \Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));
            $session = \Stripe\Checkout\Session::create([
                'payment_method_types' => ['card'],
                'line_items' => [[
                    'price_data' => [
                        'currency' => 'EGP',
                        'unit_amount' => $totalCartPrice * 100,
                        'product_data' => [
                            'name' => 'Payment for order',
                        ],
                    ],
                    'quantity' => 1,
                ]],
                'mode' => 'payment',
                'success_url' => 'http://localhost:3000/success',
                'cancel_url' => 'http://localhost:3000/cart',
            ]);


            return response()->json(['url' => $session->url]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function storePayment(Request $request)
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();
            $cart = Cart::where('user_id', $user->id)->first();
    
            if (!$cart) {
                return response()->json(['error' => 'Cart not found'], 404);
            }
    
            $cartProducts = CartProduct::where('cart_id', $cart->id)->get();
            $totalCartPrice = $cartProducts->sum('total_product_price');
    
            $payment = new Payment();
            $payment->cart_id = $cart->id;
            $payment->amount = $totalCartPrice;
            $payment->save();
    
            return response()->json(['message' => 'Payment stored successfully']);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
    
}
