<?php


namespace App\Http\Controllers\Status;


use App\Http\Controllers\Controller;
use App\Http\Resources\Area\HistoryStatusResource;
use App\Model\Areas\HistoryStatus;
use Illuminate\Http\Request;

class HistoryStatusController extends Controller
{

    public function index(){
        return HistoryStatusResource::collection(HistoryStatus::all());
    }

    public function create(Request $request){
        $request->validate([
            'status_id' => 'numeric',
            'shipment_id' => 'numeric',
        ]);
        HistoryStatus::cerate($request->all());
    }

    public function edit(){

    }

    public function update(HistoryStatus $history, Request $request){
        $request->validate([
            'status_id' => 'numeric',
            'shipment_id' => 'numeric',
        ]);
        $history->update([$request->all()]);
    }


    public function delete(HistoryStatus $history){
        $history->delete();
    }
}
