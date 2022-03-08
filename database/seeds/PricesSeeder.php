<?php
namespace App\Database\Seeds;
use Illuminate\Database\Seeder;

class PricesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $users= App\Model\Users\Users::all();
        $regions =App\Model\Areas\Region::all();
        $prices=[];
        foreach($users as $user){
            foreach($regions as $region){
                factory(App\Model\Prices\Prices::class, 1)->create([
                    'custmer_id' =>$user->id ,
                    'region_id'=>$region->id,
                ]);
//                $prices[]=[
//                    'custmer_id' =>$user->id ,
//                    'region_id'=>$region->id,
//                    'price'=> rand(1 ,5)
//                ];
            }
//            App\Model\Prices\Prices::create($prices);
//            $prices=[];
        }

    }
}
