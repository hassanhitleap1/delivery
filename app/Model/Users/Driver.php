<?php


namespace App\Model\Users;


use App\Scopes\Users\DriverScope;
use App\User;

class Driver extends  User
{
    protected $table = 'users';

    protected static function boot()
    {
        parent::boot();

        static::addGlobalScope(new DriverScope());
    }
}
