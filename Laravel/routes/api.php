<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
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


Route::middleware('jwt.auth')->get('/user', [UserController::class, 'profile']);
Route::post('/register', [UserController::class, 'register'])->name('register');
Route::post('/login', [UserController::class, 'login'])->name('login');
Route::post('/updateuser', [UserController::class, 'updateuser'])->name('updateuser');
Route::middleware('jwt.auth')->post('/favourite', [FavouriteController::class, 'store'])->name('favourite.store');
Route::middleware('jwt.auth')->get('/favourites', [FavouriteController::class, 'userFavourites']);
Route::middleware('jwt.auth')->delete('/favourites/{productId}', [FavouriteController::class, 'removeFavoriteProduct']);

