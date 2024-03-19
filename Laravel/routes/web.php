<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StripeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::get('checkout', [StripeController::class, 'checkout'])->name('checkout');
Route::post('session', [StripeController::class, 'session'])->name('session');
Route::get('success', [StripeController::class, 'success'])->name('success');
