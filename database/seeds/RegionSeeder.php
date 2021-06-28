<?php

use App\Model\Area\Region;
use Illuminate\Database\Seeder;

class RegionSeeder extends Seeder
{
    protected $model = Region::class;
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        factory(\App\Model\Area\Region::class, 50)->make();
    }
}
