<?php

namespace App\Http\Resources\Shipments;

use Illuminate\Http\Resources\Json\JsonResource;

class ShipmentsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return[

            'policy_number'=>$this->policy_number,
            'driver_id'=>$this->driver_id,
            'status_id'=>$this->status_id,
            'customer_id'=>$this->customer_id,
            'areas_id'=>$this->areas_id,
            'address'=>$this->address,
            'phone'=>$this->phone,
            'other_phone'=>$this->other_phone,
            'required_amount'=>$this->required_amount,
            'delivery_amount'=>$this->delivery_amount,
            'note'=>$this->note,
            'areas'=>$this->area,
            'customer'=>$this->customer,
            'status'=>$this->status,
            'driver'=>$this->driver,
        ];
        return parent::toArray($request);
    }
}
