<?php

use App\Model\Areas\Area;
use App\Model\Areas\Region;
use Illuminate\Database\Seeder;

class RegionSeeder extends Seeder
{
//    protected $model = Region::class;
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {


        factory(Region::class, 5)->create()->each(function ($region)
        {
            factory(Area::class, 2)
                ->create(['region_id'=>$region->id]);
        });
    }
}
