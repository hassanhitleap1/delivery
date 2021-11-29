<?php


namespace App\Http\Controllers\Prices;

use App\Http\Controllers\Controller;
use App\Http\Requests\Prices\PriceRequest;
use App\Http\Resources\Prices\PriceResource;
use App\Model\Prices\Prices;


class PriceController extends  Controller
{
    public function __construct()
    {
     //   $this->middleware('jwt.verify')->only(['index','store','update','show','destroy']);
    }
    public function index(){
        return PriceResource::collection(Prices::paginate(10));
    }

    public function store(PriceRequest $request){
       $price= Prices::create([
            'price'=>$request->price,
            'custmer_id'=>$request->custmer_id,
            'region_id'=>$request->region_id,
        ]);
        return new PriceResource($price);
    }


    public function show(Prices $price){
        return new PriceResource($price);
    }

    public function update(Prices $price,PriceRequest $request){

        $price= tap($price)->update([
            'price'=>$request->price,
            'custmer_id'=>$request->custmer_id,
            'region_id'=>$request->region_id,
        ]);

        return new PriceResource($price);
    }


    public function destroy(Prices $price){
        $price->delete();
        return Response('',201);
    }



}
