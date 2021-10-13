<?php


namespace App\Http\Controllers\Users;


use App\Http\Controllers\Controller;
use App\Http\Resources\Users\UsersResource;
use App\Model\Users\Users;
use Illuminate\Http\Request;

class UsersController extends  Controller
{
    public function index(){
        return UsersResource::collection(Users::all());
    }

    public function create(Request $request){

    }

    public function edit(){

    }

    public function update(){

    }


    public function delete(){

    }
}
