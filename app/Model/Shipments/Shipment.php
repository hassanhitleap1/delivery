<?php


namespace App\Model\Shipments;
use Illuminate\Database\Eloquent\Model;

class Shipment extends  Model
{
    protected  $table='shipments';
    protected $fillable = [
        'policy_number',
        'driver_id',
        'status_id',
        'customer_id',
        'areas_id',
        'address',
        'phone',
        'other_phone',
        'required_amount',
        'delivery_amount',
        'note',
    ];



    public function customer(){
        return $this->belongsTo(Customer::class);
    }

    
    public function status(){
        return $this->belongsTo(Customer::class);
    }


    public function driver(){
        return $this->belongsTo(Driver::class);
    }

    
}
