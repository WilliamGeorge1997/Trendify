<?php

use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Exceptions\JWTException;


class Login
{
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ], [
            'email.required' => 'The email field is required.',
            'email.email' => 'Please enter a valid email address.',
            'password.required' => 'The password field is required.',
        ]);


        if ($validator->fails()) {
            $errorMessage = $validator->errors()->first();
            $data = [
                'status' => 400,
                'message' => $errorMessage,
            ];
            return response()->json($data, 400);
        }


        try {
            $credentials = $request->only('email', 'password');
            if (!$token = JWTAuth::attempt($credentials)) {
                $data = [
                    'status' => 401,
                    'message' => 'Wrong email or password.',
                ];
                return response()->json($data, 401);
            }
        } catch (JWTException $e) {
            $data = [
                'status' => 500,
                'message' => 'Could not create token',
            ];
            return response()->json($data, 500);
        }


        $user = JWTAuth::user();

        $token = JWTAuth::claims([
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
        ])->attempt($credentials);
        $data = [
            'status' => 200,
            'message' => 'success',
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'id' => $user->id,
            ],
            'token' => $token,

        ];
        return response()->json($data, 200);
    }
}
