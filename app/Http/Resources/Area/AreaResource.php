<?php

namespace App\Http\Resources\Area;

use Illuminate\Http\Resources\Json\JsonResource;

class AreaResource extends JsonResource
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
            'region_id'=> $this->region_id,
            'created_at'=> $this->created_at,
            'region'=> $this->region,
            'country'=> $this->region->country
        ];
        return parent::toArray($request);
    }
}
