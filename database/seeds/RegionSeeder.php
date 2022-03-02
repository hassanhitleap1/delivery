<?php

use App\Model\Status\Status;
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
        factory(Region::class, 100)->create();
    }
}
