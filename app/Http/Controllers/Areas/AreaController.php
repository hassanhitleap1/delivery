<?php


namespace App\Http\Controllers\Areas;


use App\Http\Controllers\Controller;
use App\Http\Requests\User\AreasRequest;
use App\Http\Resources\Area\AreaResource;
use App\Model\Areas\Area;



class AreaController extends Controller
{

    public function index(){
        return AreaResource::collection(Area::all());
    }

    public function create(AreasRequest $request){
        $area=Status::cerate($request->all());
        return new AreaResource($area);
    }


    public function update(Area $area, AreasRequest  $request){
        $area= tap($area)->update([$request->all()]);
        return new AreaResource($area);
    }


    public function delete(Area $area){
        $area->delete();
        return Response('',201);
    }


}
