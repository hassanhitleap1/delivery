<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class UsersTableSeeder extends Seeder
{
    protected $model = User::class;
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(User::class, 10)->create(['type'=>User::ADMIN]);
        factory(User::class, 10)->create(['type'=>User::DRIVER]);
        factory(User::class, 10)->create(['type'=>User::CUSTOMER]);
        factory(User::class, 10)->create(['type'=>User::USER]);
        User::create([
            'name' => 'admin',
            'email' => 'admin@admin.com',
            'phone' => '0799263494',
            'password' =>  bcrypt (123456789), // password,
            'remember_token' => Str::random(10),
            'email_verified_at' => now(),
            'type'=>User::ADMIN,
            'address'=>"adress",

        ]);
    }
}
