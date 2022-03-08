<?php

namespace App\Http\Resources\Prices;

use Illuminate\Http\Resources\Json\JsonResource;

class WalletResource extends JsonResource
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
            'custmer_id'=>$this->custmer_id,
            'custmer'=>$this->custmer,

        ];
        return parent::toArray($request);
    }
}
