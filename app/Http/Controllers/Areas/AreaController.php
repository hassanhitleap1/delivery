<?php


namespace App\Http\Controllers\Areas;


use App\Http\Resources\Area\AreaResource;
use App\Model\Areas\Status;
use Illuminate\Http\Request;


class AreaController
{

    public function index(){
        return AreaResource::collection(Status::all());
    }

    public function create(Request $request){
        $request->validate([
            'title' => 'required|max:255',
            'region_id'=>'required|numeric'
        ]);
        Status::cerate($request->all());
    }

    public function edit(){

    }

    public function update(Status $area, Request $request){
        $request->validate([
            'title' => 'required|max:255',
            'region_id'=>'required|numeric'
        ]);
        $area->update([$request->all()]);
    }


    public function delete(Status $area){
        $area->delete();
    }


}
