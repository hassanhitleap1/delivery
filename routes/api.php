<?php


use Illuminate\Support\Facades\Route;


Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    Route::post('login', 'AuthJwt\AuthController@login');
    Route::post('logout', 'AuthJwt\AuthController@logout');
    Route::post('refresh', 'AuthJwt\AuthController@refresh');
    Route::post('me', 'AuthJwt\AuthController@me');
    Route::post('registration', 'AuthJwt\AuthController@registration');

});


Route::apiResource('shipments',\Shipments\ShipmentController::class);



Route::apiResources([
    'status' => \Status\StatusController::class,
    'history-status' => \Status\HistoryStatusController::class,
]);

Route::apiResources([
   'areas' => \Areas\AreaController::class,
    'regions' => \Areas\RegionController::class,
]);

Route::group(['prefix' => 'users'], function () {
    Route::apiResources([
        'customers' => \Users\CustomerController::class,
        'drivers' => \Users\DriverController::class,
    ]);
});
