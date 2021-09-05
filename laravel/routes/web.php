<?php

use App\Http\Controllers\StaffsController;
use App\Http\Controllers\ScheduleController;
use App\Http\Controllers\NoticesController;
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

    Route::get('/schedule', [ScheduleController::class, 'index'])->name(
      'schedule'
    );
    Route::post('/schedule', [ScheduleController::class, 'store']);
    Route::get('/schedules', [ScheduleController::class, 'schedules']);

    Route::get('/notices', [NoticesController::class, 'index'])->name(
      'notices'
    );
    Route::post('/notice', [NoticesController::class, 'store']);
    Route::delete('/notice/{id}', [NoticesController::class, 'delete']);
    Route::put('/notice/{id}', [NoticesController::class, 'update']);
    Route::get('/notice/all', [NoticesController::class, 'notices']);
  }
);

Route::group(['domain' => 'www.angels26.com.au'], function () {
  require __DIR__ . '/home.php';
});

// 调试开发用的
// Route::group(['domain' => 'localhost'], function () {
//   require __DIR__ . '/auth.php';

//   require __DIR__ . '/home.php';
//   Route::get('/notices', [NoticesController::class, 'index'])->name('notices');
//   Route::post('/notice', [NoticesController::class, 'store']);
//   Route::delete('/notice/{id}', [NoticesController::class, 'delete']);
//   Route::put('/notice/{id}', [NoticesController::class, 'update']);
//   Route::get('/notice/all', [NoticesController::class, 'notices']);

//   Route::get('/schedule', [ScheduleController::class, 'index'])->name(
//     'schedule'
//   );
//   Route::post('/schedule', [ScheduleController::class, 'store']);
//   Route::get('/schedules', [ScheduleController::class, 'schedules']);
// });

// 维护用的页面
// Route::group(['domain' => 'www.angels26.com.au'], function () {
//  Route::get('/', function () {
//    return view('welcome');
//  });
// });
