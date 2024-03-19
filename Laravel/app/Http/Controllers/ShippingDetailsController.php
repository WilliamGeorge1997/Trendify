<?php

namespace App\Http\Controllers;

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

        $validator = Validator::make($request->all(), [
            'phone' => 'required|regex:/^\+?\d{10,15}$/',
            'city_id' => 'required|integer',
            'address' => 'required|string|max:200',
            'zip_code' => 'required|integer|max:999999',
        ], [
            'phone.required' => 'Phone number is required.',
            'phone.regex' => 'Invalid phone number format.',
            'city_id.required' => 'City is required.',
            'city_id.integer' => 'City ID must be an integer.',
            'address.required' => 'Address is required.',
            'address.max' => 'Address must not exceed 200 characters.',
            'zip_code.required' => 'Zip code is required.',
            'zip_code.integer' => 'Zip code must be a numeric value.',
            'zip_code.max' => 'Zip code must not exceed 6 digits.',
        ]);

        if ($validator->fails()) {
            $errors = $validator->errors()->messages();

            return response()->json(['message' => 'Validation failed.', 'errors' => $errors], 422);
        }

        $shippingData = $request->only(['phone', 'city_id', 'address', 'zip_code']);
        $shippingData['user_id'] = $user->id;

        $shipping = Shipping::create($shippingData);

        return response()->json(['message' => 'Shipping details added successfully', 'shipping' => $shipping]);
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

}
