<?php


namespace App\Http\Controllers\Areas;


use App\Http\Controllers\Controller;
use App\Http\Resources\Area\CountriesResource;
use App\Model\Areas\Countries;
use Illuminate\Http\Request;


class CountriesController extends Controller
{

    public function index(){
        return CountriesResource::collection(Countries::paginate(5)->items());
    }

    public function create(CountriesRequest $request){
        $contry= Countries::cerate($request->all());
        return new CountriesResource($contry);
    }

    public function edit(){

    }

    public function update(Countries $country, CountriesRequest $request){
        $country=tap($country)->update([$request->all()]);
        return new CountriesResource($country);
    }


    public function delete(Countries $country){
        $country->delete();
    }


}
