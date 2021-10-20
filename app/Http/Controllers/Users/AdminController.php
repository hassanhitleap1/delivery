<?php


namespace App\Http\Controllers\Users;


use App\Http\Controllers\Controller;
use App\Http\Requests\User\AdminRequest;
use App\Http\Resources\Users\AdminResource;
use App\Model\Users\Admin;
use Illuminate\Http\Request;

class AdminController extends  Controller
{
    public function index(){
        return AdminResource::collection(Admin::all());
    }

    public function store(AdminRequest $request){
        Admin::cerate($request->all());
    }

    public function edit(){

    }

    public function update(){

    }


    public function delete(){

    }
}
