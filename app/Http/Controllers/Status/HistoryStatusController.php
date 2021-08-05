<?php


namespace App\Http\Controllers\Status;


use App\Http\Resources\Area\StatusResource;
use App\Model\Areas\Status;
use Illuminate\Http\Request;

class HistoryStatusController
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
