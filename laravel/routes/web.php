<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//admin
Route::group(['domain' => 'admin.angels26.com.au'], function () {
    require __DIR__ . '/auth.php';
    Route::get('/', function () {
        return view('staffs');
    })
        ->middleware(['auth'])
        ->name('staffs');
    Route::get('/schedule', function () {
        return view('schedule');
    })
        ->middleware(['auth'])
        ->name('schedule');
});

Route::group(['domain' => 'test.angels26.com.au'], function () {
   require __DIR__ . '/home.php';
});

Route::group(['domain' => 'www.angels26.com.au'], function () {
    Route::get('/', function () {
        return view('welcome');
    });
});
