<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () { return view('home'); })->name('home');
Route::get('/service', function () { return view('home'); })->name('service');
Route::get('/ladies', function () { return view('home'); })->name('ladies');
Route::get('/whats', function () { return view('home'); })->name('whatsOn');
Route::get('/contact', function () { return view('home'); })->name('contactUs');

