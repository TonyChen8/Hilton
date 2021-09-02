<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StaffsController;
use App\Http\Controllers\NoticesController;

Route::get('/', function () { return view('home'); })->name('home');
Route::get('/service', function () { return view('service'); })->name('service');
Route::get('/ladies', function () { return view('ladies'); })->name('ladies');
Route::get('/roster', function () { return view('whoson'); })->name('whoson');
Route::get('/contact', function () { return view('contactus'); })->name('contactus');

Route::get('/staffs', [StaffsController::class, 'staffs']);
Route::get('/notice/all', [NoticesController::class, 'notices']);
