<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Shipping;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Validator;


class ShippingDetailsController extends Controller
{
    public function addShippingDetails(Request $request)
    {
        try {

            try {
                $user = JWTAuth::parseToken()->authenticate();
            } catch (\Exception $e) {
                return response()->json(['status' => 401, 'message' => 'Unauthorized'], 401);
            }
            $cart = Cart::where('user_id', $user->id)->first();

            if (!$cart) {
                return response()->json(['status' => 'success', 'message' => 'You dont have cart.'], 200);
            }


            $validator = Validator::make($request->all(), [
                'phone' => 'required|regex:/^\+?\d{10,15}$/',
                'city_id' => 'required',
                'address' => 'required|string|max:200',
                'zip_code' => 'required|integer|max:999999',

            ], [
                'phone.required' => 'Phone number is required.',
                'phone.regex' => 'Invalid phone number format.',
                'city_id.required' => 'City is required.',
                'address.required' => 'Address is required.',
                'address.max' => 'Address must not exceed 200 characters.',
                'zip_code.required' => 'Zip code is required.',
                'zip_code.integer' => 'Zip code must be a numeric value.',
                'zip_code.max' => 'Zip code must not exceed 6 digits.',

            ]);

            if ($validator->fails()) {
                $errors = [];

                foreach ($validator->errors()->messages() as $key => $errorMessages) {
                    $errors[$key] = $errorMessages[0];
                }

                return response()->json(['message' => 'Validation failed.', 'errors' => $errors], 400);
            }


            if (!$user->cart) {
                return response()->json(['message' => 'User does not have a cart'], 400);
            }


            $shipping = Shipping::create([
                'phone' => $request->phone,
                'city_id' => $request->city_id,
                'address' => $request->address,
                'zip_code' => $request->zip_code,
                'cart_id' => $cart->id,
            ]);

            return response()->json(['message' => 'Shipping details added successfully', 'shipping' => $shipping], 200);
        } catch (\Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            return response()->json(['message' => 'Invalid token.'], 401);
        } catch (\Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            return response()->json(['message' => 'Token expired.'], 401);
        } catch (\Tymon\JWTAuth\Exceptions\JWTException $e) {
            return response()->json(['message' => 'Token absent or invalid.'], 401);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to add shipping details.'], 500);
        }
    }




    public function deleteShippingDetails()
    {
        try {

            $user = JWTAuth::parseToken()->authenticate();

            $cart = Cart::where('user_id', $user->id)->first();


            if (!$cart) {
                return response()->json(['message' => 'Cart not found for the authenticated user'], 404);
            }


            $shipping = Shipping::where('cart_id', $cart->id)->first();

            if (!$shipping) {
                return response()->json(['message' => 'Shipping details not found for the given cart'], 404);
            }

            $shipping->delete();

            return response()->json(['message' => 'Shipping details deleted successfully'], 200);
        } catch (\Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            return response()->json(['message' => 'Invalid token.'], 401);
        } catch (\Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            return response()->json(['message' => 'Token expired.'], 401);
        } catch (\Tymon\JWTAuth\Exceptions\JWTException $e) {
            return response()->json(['message' => 'Token absent or invalid.'], 401);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to delete shipping details'], 500);
        }
    }
}
