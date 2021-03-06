<?php


use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        $this->call(UsersTableSeeder::class);
        $this->call(StatusSeeder::class);
        $this->call(CountriesSeeder::class);
        $this->call(RegionSeeder::class);
        $this->call(AreaSeeder::class);




    }
}
