<?php


namespace App\Http\Controllers\Shipments;


use App\Model\Shipments\Shipment;

class ShipmentController
{
    public function index(){
        return ShipmentsResource::collection(Shipment::all());
    }

    public function create(Request $request){
        $request->validate([
            'title' => 'required|max:255',
        ]);
        Shipment::cerate($request->all());
    }

    public function edit(){

    }

    public function update(Shipment $shipment, Request $request){
        $request->validate([
            'title' => 'required|max:255',
        ]);
        $shipment->update([$request->all()]);
    }


    public function delete(Request $shipment){
        $shipment->delete();
    }
}
