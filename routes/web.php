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




Route::get('/', 'InitialController@init');
Route::get('/{any}', 'InitialController@init');
Route::get('/{any}/{any1}', 'InitialController@init');
Route::get('/{any}/{any1}/{any2}', 'InitialController@init');

//Route::group(['middleware' => 'web'], function () {
//    Route::get('api/documentation', '\L5Swagger\Http\Controllers\SwaggerController@api')->name('l5swagger.api');
//});
