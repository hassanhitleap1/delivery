<?php


namespace App\Model\Area;

use Illuminate\Database\Eloquent\Model;
use Eloquent;

class Region extends  Eloquent
{
    protected  $table='regions';

    public function areas(){
        return $this->hasMany(Area::class);
    }
}
