<?php


use Illuminate\Support\Facades\Route;


Route::apiResources([
   'areas' => \Areas\AreaController::class,
    'regions' => \Areas\RegionController::class,
]);

