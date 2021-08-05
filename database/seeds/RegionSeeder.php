<?php

use App\Model\Areas\Status;
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
            factory(Status::class, 2)
                ->create(['region_id'=>$region->id]);
        });
    }
}
