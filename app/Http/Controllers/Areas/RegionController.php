<?php


namespace App\Http\Controllers\Areas;





use App\Http\Resources\Area\RegionResource;
use App\Model\Areas\Region;
use Illuminate\Http\Request;

class RegionController
{
    public function index(){
        return RegionResource::collection(Region::all());
    }

    public function create(Request $request){
        $request->validate([
            'name' => 'required',
            'price' => 'number',
        ]);
    }

    public function upfate(Region $region,Request $request){
        $request->validate([
            'name' => 'required',
            'price' => 'number',
        ]);
        $region->update([$request->all()]);

    }

    public function edite(){

    }


    public function delete(Region $region){
        $region->delete();
    }

}
