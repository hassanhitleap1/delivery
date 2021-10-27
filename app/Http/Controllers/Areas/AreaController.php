<?php


namespace App\Http\Controllers\Areas;


use App\Http\Controllers\Controller;
use App\Http\Requests\User\AreasRequest;
use App\Http\Resources\Area\AreaResource;
use App\Model\Areas\Area;
use Illuminate\Http\Request;


class AreaController extends Controller
{

    public function index(){
        return AreaResource::collection(Area::all());
    }

    public function create(AreasRequest $request){
        $area=Status::cerate($request->all());
        return new AreaResource($area);
    }


    public function update(Status $area, AreasRequest  $request){
        $area= tap($area)->update([$request->all()]);
        return new AreaResource($area);
    }


    public function delete(Status $area){
        $area->delete();
        return Response('',201);
    }


}
