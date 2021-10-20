<?php


namespace App\Http\Controllers\Users;


use App\Http\Controllers\Controller;
use App\Http\Requests\User\AdminRequest;
use App\Http\Resources\Users\AdminResource;
use App\Model\Users\Admin;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;

class AdminController extends  Controller
{
    public function index(){
        return AdminResource::collection(Admin::all());
    }

    public function store(AdminRequest $request){

       $admin= Admin::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'phone'=>$request->phone,
            'password'=>bcrypt($request->password),
            'type'=>User::ADMIN,
            'address'=>$request->address
        ]);

        return new AdminResource($admin);

    }

    public function edit(){

    }

    public function update(){

    }


    public function delete(){

    }
}
