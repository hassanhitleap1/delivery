<?php

namespace App\Model\Prices;

use App\Model\Areas\Region;
use App\Model\Users\Customer;
use Illuminate\Database\Eloquent\Model;

class Prices extends  Model
{
    protected  $table='prices';
    protected $fillable=['price','custmer_id','region_id'];

    public function custmer (){
        return $this->belongsTo(Customer::class);
    }

    public function region(){
        return $this->belongsTo(Region::class);
    }
}
