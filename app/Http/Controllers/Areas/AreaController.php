<?php


namespace App\Http\Controllers\Areas;


use App\Http\Controllers\Controller;
use App\Http\Requests\Areas\AreasRequest;
use App\Http\Resources\Area\AreaResource;
use App\Model\Areas\Area;



class AreaController extends Controller
{

    public function __construct()
    {
      //  $this->middleware('jwt.verify')->only(['index','store','update','show','destroy','list_areas']);
    }

    public function index(){
        return AreaResource::collection(Area::all());
    }

    public function list_areas(){
        return AreaResource::collection(Area::all());
    }

    public function store(AreasRequest $request){
            $area = Area::create([
                'name'=>$request->name,
                'region_id'=>$request->region_id,
            ]);
        return new AreaResource($area);
    }


    public function update(Area $area, AreasRequest  $request){
        $area=tap($area)->update([
            'name'=>$request->name,
            'region_id'=>$request->region_id
        ]);
        return new AreaResource($area);
    }


    public function show(Area $area){
        return new AreaResource($area);
    }

    public function destroy(Area $area){
        $area->delete();
        return Response('',201);
    }


}
