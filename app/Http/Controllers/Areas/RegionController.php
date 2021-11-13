<?php


namespace App\Http\Controllers\Areas;

use App\Http\Requests\Areas\RegionRequest;
use App\Http\Resources\Area\RegionResource;
use App\Model\Areas\Region;


class RegionController
{
    public function index(){
        return RegionResource::collection(Region::all());
    }

    public function store(RegionRequest $request){
        $region = Region::create([
            'name'=>$request->name,
            'country_id'=>$request->country_id,
            'price'=>$request->price,
            ]);
        return new RegionResource($region);
    }

    public function update(Region $region,RegionRequest $request){
        $region=tap($region)->update([$request->all()]);
        return new RegionResource($region);
    }

    public function delete(Region $region){
        $region->delete();
        return Response('',201);
    }

}
