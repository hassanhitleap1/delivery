<?php


namespace App\Http\Controllers\Shipments;
use App\Model\Shipments\Shipment;
use App\Http\Controllers\Controller;
use App\Http\Resources\Shipments\ShipmentsResource;

class ShipmentController extends Controller
{
    public function __construct()
    {
        $this->middleware('jwt.verify')->only(['index','store','update','show','destroy']);
    }
    public function index(){
        return ShipmentsResource::collection(Shipment::paginate(10));
    }

    public function create(ShipmentsRequest $request){
        $shipment  = Shipment::cerate($request->all());
        return new ShipmentsResource($shipment );
    }


    public function update(Shipment $shipment, ShipmentsRequest $request){
        $shipment=tap($shipment)->update([$request->all()]);
        return new ShipmentsResource($shipment );
    }


    public function delete(Shipment $shipment){
        $shipment->delete();
        return Response('',201);
    }

    public function show(Shipment $shipment){
        return new ShipmentsResource($shipment );
    }
}
