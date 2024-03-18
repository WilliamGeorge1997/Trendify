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
        'name' => 'required|min:3|max:50',
        'email' => 'required|email',
        'password' => 'required|min:8|max:30|confirmed',
        'phone' => 'required|regex:/^\+?\d{10,15}$/|unique:users',
    ], [
        'name.required' => 'The name field is required.',
        'name.min' => 'The name must be at least 3 characters.',
        'name.max' => 'The name may not be greater than 50 characters.',
        'email.required' => 'The email field is required.',
        'email.email' => 'Please enter a valid email address.',
        'password.required' => 'The password field is required.',
        'password.confirmed' => 'The password confirmation does not match.',
        'password.min' => 'The password must be at least 8 characters.',
        'password.max' => 'The password must be at most 30 characters.',
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
            'id' => $user->id,
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



public function updateuser(Request $request)
{
    $validator = Validator::make($request->all(), [
        'gender' => 'nullable|in:male,female',
        'about' => 'nullable|max:250',
        'phone' => 'required|regex:/^\+?\d{10,15}$/|unique:users',
        'avatar' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:2048',
        'date_of_birth' => 'nullable|date',
    ], [
        'gender.in' => 'The gender must be either "male" or "female".',
        'about.max' => 'The about field must not exceed 250 characters.',
        'phone.required' => 'The phone field is required.',
        'phone.regex' => 'Please enter a valid phone number.',
        'phone.unique' => 'Phone number already exists.',
        'avatar.image' => 'The avatar must be an image file.',
        'avatar.mimes' => 'The avatar must be a file of type: jpeg, png, jpg, gif, webp.',
        'avatar.max' => 'The avatar may not be greater than 2MB in size.',
        'date_of_birth.date' => 'The date of birth must be a valid date format.',
    ]);

    if ($validator->fails()) {
        $errorMessage = $validator->errors()->first();
        $data = [
            'status' => 422,
            'message' => $errorMessage,
        ];
        return response()->json($data, 422);
    }

    try {
        $user = JWTAuth::parseToken()->authenticate();
    } catch (\Exception $e) {
        $data = [
            'status' => 401,
            'message' => 'Unauthorized',
        ];
        return response()->json($data, 401);
    }

    if ($request->filled('gender')) {
        $user->gender = $request->gender;
    }

    if ($request->filled('phone')) {
        $user->phone = $request->phone;
    }

    if ($request->filled('about')) {
        $user->about = $request->about;
    }

    if ($request->hasFile('avatar')) {
        $avatarPath = $request->file('avatar')->store('avatars', 'public');
        $user->avatar = $avatarPath;
    }

    if ($request->filled('date_of_birth')) {
        $user->date_of_birth = $request->date_of_birth;
    }

    $user->save();

    $data = [
        'status' => 200,
        'message' => 'User data updated successfully',
        'user' => $user,
    ];
    return response()->json($data, 200);
}


public function profile(Request $request)
{
    try {
        $token = $request->bearerToken();
        $user = JWTAuth::parseToken()->authenticate($token);

        if (!$user) {
            return response()->json(['status' => 404, 'message' => 'User not found'], 404);
        }

        $userData = [
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'phone' => $user->phone,
            'avatar' => $user->avatar,
            'gender' => $user->gender,
            'date_of_birth' => $user->date_of_birth,
            'about' => $user->about,
            'role' => $user->role,
        ];

        return response()->json(['status' => 200, 'user' => $userData], 200);
    } catch (\Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
        return response()->json(['status' => 401, 'message' => 'Token expired'], 401);
    } catch (\Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
        return response()->json(['status' => 401, 'message' => 'Token invalid'], 401);
    } catch (\Tymon\JWTAuth\Exceptions\JWTException $e) {
        return response()->json(['status' => 500, 'message' => 'Token absent'], 500);
    } catch (\Exception $e) {
        
        return response()->json(['status' => 500, 'message' => 'Internal Server Error'], 500);
    }
}
}


