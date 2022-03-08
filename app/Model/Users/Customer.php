<?php


namespace App\Model\Users;


use App\Model\Prices\Prices;
use App\Scopes\Users\CustomerScope;
use App\Scopes\Users\Filters;
use App\User;

class Customer extends  User
{
    protected $table = 'users';

    protected static function boot()
    {
        parent::boot();
        static::addGlobalScope(new CustomerScope);
        static::addGlobalScope(new Filters());
    }

    public function listPrices(){
        return $this->hasMany(Prices::class,'id','user_id');
    }
}
