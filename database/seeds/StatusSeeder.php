<?php

use App\Model\Status\Status;
use Illuminate\Database\Seeder;

class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      
        factory(Status::class, 30)->create();
    }
}
