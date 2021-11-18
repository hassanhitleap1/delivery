<?php
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'dashboard' ], function () {
    Route::get('/', 'Home\Dashboard@index');
});

//Route::get('auth/refresh', function () {
//    dd('');
//})->middleware('cors');



Route::group(['prefix' => 'auth' ], function () {
    Route::post('login', 'AuthJwt\AuthController@login');
    Route::post('logout', 'AuthJwt\AuthController@logout');
    Route::post('refresh', 'AuthJwt\AuthController@refresh');
    Route::post('me', 'AuthJwt\AuthController@me');
    Route::post('registration','AuthJwt\AuthController@registration');
});
Route::apiResource('shipments',\Shipments\ShipmentController::class);
Route::apiResources([
    'status' => \Status\StatusController::class,
    'history-status' => \Status\HistoryStatusController::class,
]);
Route::apiResources([
   'areas' => \Areas\AreaController::class,
   'regions' => \Areas\RegionController::class,
   'countries'=> \Areas\CountriesController::class,
]);
Route::group(['prefix' => 'user'], function () {
    Route::apiResources([
        'admins' => \Users\AdminController::class,
        'custmers' => \Users\CustomerController::class,
        'drivers' => \Users\DriverController::class,
        'users' => \Users\UsersController::class,
    ]);
});
