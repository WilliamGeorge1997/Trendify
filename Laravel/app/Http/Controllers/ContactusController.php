<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ContactUs;
use Illuminate\Support\Facades\Validator;

class ContactusController extends Controller
{

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|max:100',
            'subject' => 'required|max:100',
            'name' => 'required|max:50',
            'description' => 'required',
            'category' => 'nullable|max:50',
            'product' => 'nullable|max:200',
            'phone' => 'nullable|max:15',
        ],[
            'email.required' => 'Email field is required.',
            'email.email' => 'Please enter a valid email address.',
            'email.max' => 'Email must not be greater than :max characters.',
            'subject.required' => 'Subject field is required.',
            'subject.max' => 'Subject must not be greater than :max characters.',
            'name.required' => 'Name field is required.',
            'name.max' => 'Name must not be greater than :max characters.',
            'description.required' => 'Description field is required.',
            'category.max' => 'Category must not be greater than :max characters.',
            'product.max' => 'Product must not be greater than :max characters.',
            'phone.max' => 'Phone must not be greater than :max characters.',
        ]);


        $errors = [];

        if ($validator->fails()) {
            if ($validator->errors()->has('email')) {
                $errors['email'] = $validator->errors()->first('email');
            }
            if ($validator->errors()->has('subject')) {
                $errors['subject'] = $validator->errors()->first('subject');
            }
            if ($validator->errors()->has('name')) {
                $errors['name'] = $validator->errors()->first('name');
            }
            if ($validator->errors()->has('description')) {
                $errors['description'] = $validator->errors()->first('description');
            }
            if ($validator->errors()->has('category')) {
                $errors['category'] = $validator->errors()->first('category');
            }
            if ($validator->errors()->has('product')) {
                $errors['product'] = $validator->errors()->first('product');
            }
            if ($validator->errors()->has('phone')) {
                $errors['phone'] = $validator->errors()->first('phone');
            }

            return response()->json(['error' => $errors], 400);
        }

        $contactUs = new Contactus();
        $contactUs->email = $request->input('email');
        $contactUs->subject = $request->input('subject');
        $contactUs->name = $request->input('name');
        $contactUs->description = $request->input('description');
        $contactUs->category = $request->input('category');
        $contactUs->product = $request->input('product');
        $contactUs->phone = $request->input('phone');
        $contactUs->save();

        return response()->json(['message' => 'Thank you, Your message has been sent successfully, we will get back to you shortly'], 200);
    }
}
