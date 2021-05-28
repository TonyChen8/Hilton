<?php

use App\Http\Controllers\StaffsController;
use App\Http\Controllers\ScheduleController;
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
});

Route::group(
	[
		'domain' => 'admin.angels26.com.au',
		'middleware' => 'auth',
	],
	function () {
		Route::get('/', [StaffsController::class, 'index'])->name('staffs');
		Route::post('/staff', [StaffsController::class, 'store']);
		Route::delete('/staff/{id}', [StaffsController::class, 'delete']);
		Route::put('/staff/{id}', [StaffsController::class, 'update']);
		Route::get('/staffs', [StaffsController::class, 'staffs']);

		Route::get('/schedule', [ScheduleController::class, 'index'])->name('schedule');
    Route::post('/schedule', [ScheduleController::class, 'store']);
    Route::get('/schedules', [ScheduleController::class, 'schedules']);
	}
);

Route::group(['domain' => 'test.angels26.com.au'], function () {
	require __DIR__ . '/home.php';
});

Route::group(['domain' => 'www.angels26.com.au'], function () {
	Route::get('/', function () {
		return view('welcome');
	});
});
