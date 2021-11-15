<?php


namespace App\Model\Areas;


use Illuminate\Database\Eloquent\Model;

class Area extends  Model
{
    protected  $table='areas';
    protected $fillable = [
        'name',
        'region_id'
    ];
    public function region(){
        return $this->belongsTo(Region::class);
    }


}
