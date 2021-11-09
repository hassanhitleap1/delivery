<?php


namespace App\Http\Controllers\Status;


use App\Http\Controllers\Controller;
use App\Http\Requests\Status\StatusRequest;
use App\Http\Resources\Status\StatusResource;
use App\Model\Status\Status;


class StatusController extends Controller
{

    public function index(){
        return StatusResource::collection(Status::all());
    }

    public function store(StatusRequest $request){
        $status=Status::create(['name'=>$request->name]);
        return new StatusResource($status);
    }

    public function update(Status $status, StatusRequest $request){
        $status=tap($status)->update([$request->all()]);
        return new StatusResource($status);
    }


    public function destroy(Status $status){
        $status->delete();
        return Response('',201);
    }
}
