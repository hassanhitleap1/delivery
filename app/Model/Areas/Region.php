<?php


namespace App\Model\Areas;

use Illuminate\Database\Eloquent\Model;
use Eloquent;

class Region extends  Eloquent
{
    protected  $table='regions';
    protected $fillable = [
        'name',
        'price',
        'country_id'
    ];

    public function country(){
        return $this->belongsTo(Countries::class);
    }

    public function areas(){
        return $this->hasMany(Area::class);
    }
}
