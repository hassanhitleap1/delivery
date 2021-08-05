<?php


use Illuminate\Support\Facades\Route;



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
