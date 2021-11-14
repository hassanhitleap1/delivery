<?php

namespace App\Http\Resources\Area;

use Illuminate\Http\Resources\Json\JsonResource;

class RegionResource extends JsonResource
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
            'id'=> $this->id,
            'name'=> $this->name,
            'price'=> $this->price,
            'country_id'=> $this->country_id,
            'created_at'=> $this->created_at,
            'country'=> $this->country,
        ];
        return parent::toArray($request);
    }
}
