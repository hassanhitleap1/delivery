<?php


namespace App\Http\Controllers\Areas;


use App\Http\Controllers\Controller;
use App\Http\Resources\Area\AreaResource;
use App\Model\Areas\Area;
use Illuminate\Http\Request;


class AreaController extends Controller
{

    public function index(){
        return AreaResource::collection(Area::all());
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
