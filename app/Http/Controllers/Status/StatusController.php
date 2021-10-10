<?php


namespace App\Http\Controllers\Status;


use App\Http\Controllers\Controller;
use App\Http\Resources\Status\StatusResource;
use App\Model\Status\Status;
use Illuminate\Http\Request;

class StatusController extends Controller
{

    public function index(){
        return StatusResource::collection(Status::all());
    }

    public function create(Request $request){
        $request->validate([
            'title' => 'required|max:255',
        ]);
        Status::cerate($request->all());
    }

    public function edit(){

    }

    public function update(Status $status, Request $request){
        $request->validate([
            'title' => 'required|max:255',
        ]);
        $status->update([$request->all()]);
    }


    public function delete(Status $status){
        $status->delete();
    }
}
