<?php

namespace App\Model\Prices;

use App\Model\Users\Customer;
use App\Model\Users\Driver;
use Illuminate\Database\Eloquent\Model;

class DriverWallet extends Model
{
    protected  $table='driver_wallets';
    protected $fillable=['balance','driver_id'];


    public  function driver(){
        $this->hasOne(Driver::class);
    }
}
