<?php


use Illuminate\Support\Facades\Route;
use Laravel\Passport\Passport;



// Passport::routes();


// Route::post('/users/login', 'Auth\LoginController@login')
//     ->name('user.login');
// Route::post('/users', 'Auth\RegisterController@register')
//     ->name('user.register');

// Route::middleware('auth:api')->group(function () {
//     Route::get('/token/validate', 'UserController@getAuthenticatedUser')
//         ->name('passport.token.validate');

//     Route::get('/user', 'UserController@getAuthenticatedUser')
//         ->name('user.authenticated');

//     Route::get('/users/logout', 'Auth\LoginController@logout')
//         ->name('user.logout');
// });


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
        'customers' => \Users\CustomerController::class,
        'drivers' => \Users\DriverController::class,
        'users' => \Users\UsersController::class,
    ]);
});
