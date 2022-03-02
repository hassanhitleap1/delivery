<?php

use App\Model\Areas\Area;
use Illuminate\Database\Seeder;

class AreaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      
        factory(Area::class, 500)->create();
    }
}
