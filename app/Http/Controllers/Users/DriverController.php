<?php


namespace App\Http\Controllers\Users;


use App\Http\Controllers\Controller;
use App\Model\Users\Driver;

class DriverController extends Controller
{
    public function index(){
        return DriverResource::collection(Driver::all());
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
