<?php

namespace App\Http\Resources\Prices;

use Illuminate\Http\Resources\Json\JsonResource;

class PriceResource extends JsonResource
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
            'price'=>$this->price,
            'custmer_id'=>$this->custmer_id,
            'custmer'=>$this->custmer,
            'region_id'=>$this->region_id,
            'region'=>$this->region,
        ];
        return parent::toArray($request);
    }
}
