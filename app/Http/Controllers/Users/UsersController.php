<?php


namespace App\Http\Controllers\Users;


use App\Http\Controllers\Controller;
use App\Http\Resources\Users\UsersResource;
use App\Model\Users\Users;
use App\User;
use Illuminate\Http\Request;

class UsersController extends  Controller
{
    public function index(){
        return UsersResource::collection(Users::all());
    }

    public function store(UserRequest $request){
        $user= Users::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'phone'=>$request->phone,
            'password'=>bcrypt($request->password),
            'type'=>User::USER,
            'address'=>$request->address
        ]);
        return new UsersResource($user);
    }


    public function show(Users $user){
        return new UsersResource($user);
    }

    public function update(Users $user,UserRequest $request){
        $user= $user->update([
            'name'=>$request->name,
            'email'=>$request->email,
            'phone'=>$request->phone,
            'type'=>User::USER,
            'address'=>$request->address
        ]);
        return new UsersResource($user);
    }


    public function destroy(Users $user){
        $user->delete();
        return Response('',201);
    }
}
