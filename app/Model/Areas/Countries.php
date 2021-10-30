<?php


namespace App\Model\Areas;


use Illuminate\Database\Eloquent\Model;

class Countries extends  Model
{
    protected  $table='countries';
    
    protected $fillable = [
        'name'
    ];
}
