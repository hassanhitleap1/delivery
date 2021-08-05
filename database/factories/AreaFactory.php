<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Areas\Area;
use App\Model\Areas\Region;
use Faker\Generator as Faker;


/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(Area::class, function (Faker $faker ,$region_id) {
    return [
        'name' => $faker->name,
        'region_id'=>$region_id,
    ];
});
