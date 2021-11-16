<?php


namespace App\Http\Controllers\Shipments;


use App\Http\Controllers\Controller;
use App\Model\Shipments\Delay;

class DelayController extends Controller
{
    public function __construct()
    {
        $this->middleware('jwt.verify')->only(['index','store','update','show','destroy']);
    }
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

