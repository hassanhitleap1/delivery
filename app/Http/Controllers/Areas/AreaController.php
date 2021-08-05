<?php


namespace App\Http\Controllers\Areas;


use App\Http\Resources\Area\AreaResource;
use App\Model\Areas\Area;


class AreaController
{

    public function index(){
        return AreaResource::collection(Area::all());
    }

    public function create(){

    }

    public function edit(){

    }

    public function update(){

    }


    public function delete(){

    }
}
