<?php


namespace App\Http\Controllers\Shipments;


use App\Model\Shipments\Delay;

class DelayController
{
    public function index(){
        return DelayResource::collection(Delay::all());
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

