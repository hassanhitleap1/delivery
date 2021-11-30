<?php


namespace App\Model\Shipments;
use Illuminate\Database\Eloquent\Model;
use App\Model\Areas\Area;
use App\Model\Users\Driver;
use App\Model\Users\Customer;
use App\Model\Status\Status;


class Shipment extends  Model
{
    const Approved=1;
    const NotApproved=2;
    protected  $table='shipments';
    protected $fillable = [
        'policy_number',
        'name',
        'driver_id',
        'status_id',
        'customer_id',
        'areas_id',
        'address',
        'phone',
        'other_phone',
        'required_amount',
        'delivery_amount',
        'approved',
        'note',
    ];



    public function customer(){
        return $this->belongsTo(Customer::class);
    }


    public function status(){
        return $this->belongsTo(Status::class);
    }


    public function driver(){
        return $this->belongsTo(Driver::class);
    }


    public function area(){
        return $this->belongsTo(Area::class);
    }
}
