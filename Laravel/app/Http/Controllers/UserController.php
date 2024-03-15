<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Exceptions\JWTException;

class UserController extends Controller
{
    public function register(Request $request)
{
    $validator = Validator::make($request->all(), [
        'name' => 'required',
        'email' => 'required|email',
        'password' => 'required|min:8|max:30|confirmed',
        'phone' => 'required|regex:/^\+?\d{10,15}$/|unique:users',
    ], [
        'name.required' => 'The name field is required.',
        'email.required' => 'The email field is required.',
        'email.email' => 'Please enter a valid email address.',
        'password.required' => 'The password field is required.',
        'password.confirmed' => 'The password confirmation does not match.',
        'password.min' => 'The password must be at least 8 characters.',
        'password.max' => 'The password must be at max 30 characters.',
        'phone.required' => 'The phone field is required.',
        'phone.regex' => 'Please enter a valid phone number.',
        'phone.unique' => 'Phone number already exists.',
    ]);

    if ($validator->fails()) {
        $errors = $validator->messages();
        $errorMessage = '';

        if ($errors->has('name')) {
            $errorMessage = $errors->first('name');
        }

        if ($errors->has('email')) {
            $errorMessage = $errors->first('email');
        }

        if ($errors->has('password')) {
            $errorMessage = $errors->first('password');
        }

        if ($errors->has('phone')) {
            $errorMessage = $errors->first('phone');
        }

        if ($errorMessage !== '') {
            $data = [
                'status' => 400,
                'message' => $errorMessage,
            ];

            return response()->json($data, 400);
        }
    } elseif (User::where('email', $request->email)->exists()) {
        $data = [
            'status' => 400,
            'message' => 'Email already exists',
        ];

        return response()->json($data, 400);
    } else {
        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->phone = $request->phone;
        $user->save();


        $token = JWTAuth::fromUser($user);

        $data = [
            'status' => 200,
            'message' => 'success',
            'user' => [
                'name' => $user->name,
                'email' => $user->email,
                'phone' => $user->phone,
            ],
            'token' => $token,
        ];

        return response()->json($data, 200);
    }
}



public function login(Request $request)
{
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|min:8|max:30',
        ], [
            'email.required' => 'The email field is required.',
            'email.email' => 'Please enter a valid email address.',
            'password.required' => 'The password field is required.',
            'password.min' => 'The password must be at least 8 characters.',
            'password.max' => 'The password must not be greater than 30 characters.',
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
            if (! $token = JWTAuth::attempt($credentials)) {
                $data = [
                    'status' => 401,
                    'message' => 'Invalid credentials',
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
        'name' => $user->name,
        'email' => $user->email,
    ])->attempt($credentials);

        $data = [
            'status' => 200,
            'message' => 'success',
            'user' => [
                'name' => $user->name,
                'email' => $user->email,
            ],
            'token' => $token,
        ];
        return response()->json($data, 200);
}

}
