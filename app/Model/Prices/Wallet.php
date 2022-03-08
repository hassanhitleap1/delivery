<?php

namespace App\Model\Prices;

use App\Model\Users\Customer;
use Illuminate\Database\Eloquent\Model;

class Wallet extends Model
{
    protected  $table='wallets';
    protected $fillable=['balance','custmer_id'];


    public  function customer(){
        $this->hasOne(Customer::class);
    }
}
