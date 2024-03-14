<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/register', [UserController::class , 'register'])->name('register');
Route::post('/login', [UserController::class , 'login'])->name('login');
Route::put('/updateuser', [UserController::class , 'updateuser'])->name('updateuser');


Route::get('products', [ProductController::class, 'index']) ;
Route::post('products', [ProductController::class, 'store']);
Route::get('products/{product_id}', [ProductController::class, 'show']);
Route::post('products/{product_id}/edit', [ProductController::class, 'update']);
Route::delete('products/{product_id}/delete', [ProductController::class, 'destroy']);