<?php


namespace App\Http\Controllers\Shipments;


class DelayController
{
    public function index(){
        return DelayResource::collection(Shipment::all());
    }

    public function create(Request $request){
        $request->validate([
            'title' => 'required|max:255',
        ]);
        Delay::cerate($request->all());
    }

    public function edit(){

    }

    public function update(Delay $delay, Request $request){
        $request->validate([
            'title' => 'required|max:255',
        ]);
        $delay->update([$request->all()]);
    }


    public function delete(Request $delay){
        $delay->delete();
    }
}

