<?php
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'dashboard' ], function () {
    Route::get('/', 'Home\Dashboard@index');
});

Route::group(['prefix' => 'auth' ], function () {
    Route::post('login', 'AuthJwt\AuthController@login');
    Route::post('logout', 'AuthJwt\AuthController@logout');
    Route::post('refresh', 'AuthJwt\AuthController@refresh');
    Route::post('me', 'AuthJwt\AuthController@me');
    Route::post('registration','AuthJwt\AuthController@registration');
});

Route::apiResource('shipments',\Shipments\ShipmentController::class);


Route::get('/prices/list-prices', [\Prices\PriceController::class,'listPrices']);
Route::apiResource('prices',\Prices\PriceController::class);
Route::apiResource('wallets',\Prices\WalletController::class);
Route::apiResource('driver-wallets',\Prices\DriverWalletController::class);

Route::apiResources([
    'status' => \Status\StatusController::class,
    'history-status' => \Status\HistoryStatusController::class,
]);



Route::get('areas/list-areas' , 'Areas\AreaController@list_areas')->name('list_areas');
Route::apiResources([
   'areas' => \Areas\AreaController::class,
   'regions' => \Areas\RegionController::class,
   'countries'=> \Areas\CountriesController::class,
]);

Route::group(['prefix' => 'user'], function () {
    Route::get('drivers/list-drivers' , 'Users\DriverController@list_drivers')->name('list_drivers');
    Route::get('custmers/list-custmers' , 'Users\CustomerController@list_custmers')->name('list_custmers');
    Route::apiResources([
        'admins' => \Users\AdminController::class,
        'custmers' => \Users\CustomerController::class,
        'drivers' => \Users\DriverController::class,
        'users' => \Users\UsersController::class,
    ]);

});
