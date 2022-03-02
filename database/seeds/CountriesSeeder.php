<?php

use App\Model\Areas\Countries;
use Illuminate\Database\Seeder;

class CountriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Countries::class, 30)->create();
    }
}
