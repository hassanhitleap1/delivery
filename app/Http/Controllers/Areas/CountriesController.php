<?php


namespace App\Http\Controllers\Areas;


use App\Http\Controllers\Controller;
use App\Http\Resources\Area\CountriesResource;
use App\Model\Areas\Countries;
use Illuminate\Http\Request;
use App\Http\Requests\Areas\CountriesRequest;

class CountriesController extends Controller
{

    public function index(){
        return CountriesResource::collection(Countries::all());
    }
    public function store(CountriesRequest $request){
        $contry= Countries::create(['name'=>$request->name]);
        return new CountriesResource($contry);
    }

    public function update(Countries $country, CountriesRequest $request){
        $country=tap($country)->update([$request->all()]);
        return new CountriesResource($country);
    }
    public function show(Countries $country){
        return new CountriesResource($country);
    }

    public function delete(Countries $country){
        $country->delete();
    }


}
