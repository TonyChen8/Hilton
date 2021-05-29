<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () { return view('home'); })->name('home');
Route::get('/service', function () { return view('service'); })->name('service');
Route::get('/ladies', function () { return view('ladies'); })->name('ladies');
Route::get('/whats', function () { return view('whosOn'); })->name('whosOn');
Route::get('/contact', function () { return view('contactUs'); })->name('contactUs');

