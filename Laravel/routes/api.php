<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CartController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\StripeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\EgyptCityController;
use App\Http\Controllers\FavouriteController;
use Tymon\JWTAuth\Http\Middleware\Authenticate;

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




Route::get('products', [ProductController::class, 'index']);
Route::post('products', [ProductController::class, 'store']);
Route::get('products/{product_id}', [ProductController::class, 'show']);
Route::post('products/{product_id}/edit', [ProductController::class, 'update']);
Route::delete('products/{product_id}/delete', [ProductController::class, 'destroy']);

Route::get('/carts', [CartController::class, 'showCart']);
Route::post('/carts', [CartController::class, 'addCart']);
Route::put('/carts/{product_id}/{action}', [CartController::class, 'updateCartProductCount']);
Route::delete('/carts/{product_id}/delete', [CartController::class, 'deleteCartProduct']);
Route::delete('/carts/delete', [CartController::class, 'deleteCart']);

Route::middleware('jwt.auth')->get('/user', [UserController::class, 'profile']);
Route::post('/register', [UserController::class, 'register'])->name('register');
Route::post('/login', [UserController::class, 'login'])->name('login');
Route::post('/updateuser', [UserController::class, 'updateuser'])->name('updateuser');
Route::middleware('jwt.auth')->post('/favourite', [FavouriteController::class, 'store'])->name('favourite.store');
Route::middleware('jwt.auth')->get('/favourites', [FavouriteController::class, 'userFavourites']);
Route::middleware('jwt.auth')->delete('/favourites/{productId}', [FavouriteController::class, 'removeFavoriteProduct']);


Route::get("cities", [EgyptCityController::class, "getAllCities"])->name("cities");
