<?php


namespace App\Http\Controllers\Areas;


use App\Http\Controllers\Controller;
use App\Http\Resources\Area\CountriesResource;
use App\Model\Areas\Countries;
use Illuminate\Http\Request;


class CountriesController extends Controller
{

    public function index(){
        return CountriesResource::collection(Countries::all());
    }

    public function create(Request $request){
        $request->validate([
            'title' => 'required|max:255',
        ]);
        Countries::cerate($request->all());
    }

    public function edit(){

    }

    public function update(Countries $country, Request $request){
        $request->validate([
            'title' => 'required|max:255',
        ]);
        $country->update([$request->all()]);
    }


    public function delete(Countries $country){
        $country->delete();
    }


}
