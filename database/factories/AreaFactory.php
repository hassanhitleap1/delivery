<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Area\Area;
use App\Model\Area\Region;
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

$factory->define(Area::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'region_id'=>Region::all()->random()->id,
    ];
});
