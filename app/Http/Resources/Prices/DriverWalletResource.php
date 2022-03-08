<?php

namespace App\Http\Resources\Prices;

use Illuminate\Http\Resources\Json\JsonResource;

class DriverWalletResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'balance'=>$this->balance,
            'driver_id'=>$this->driver_id,
            'driver'=>$this->driver,

        ];
        return parent::toArray($request);
    }
}
