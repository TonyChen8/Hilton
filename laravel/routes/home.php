<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StaffsController;

Route::get('/', function () { return view('home'); })->name('home');
Route::get('/service', function () { return view('service'); })->name('service');
Route::get('/ladies', function () { return view('ladies'); })->name('ladies');
Route::get('/whoson', function () { return view('whosOn'); })->name('whosOn');
Route::get('/contact', function () { return view('contactUs'); })->name('contactUs');

Route::get('/staffs', [StaffsController::class, 'staffs']);
