<?php


namespace App\Http\Controllers\Users;


use App\Events\UserEvent;
use App\Http\Controllers\Controller;
use App\Http\Requests\User\AdminRequest;
use App\Http\Resources\Users\AdminResource;
use App\Listeners\UserListener;
use App\Model\Users\Admin;
use App\User;


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

        UserEvent::dispatch($admin);

        return new AdminResource($admin);
    }


    public function show(Admin $admin){
        return new AdminResource($admin);
    }

    public function update(Admin $admin,AdminRequest $request){
        $admin= $admin->update([
            'name'=>$request->name,
            'email'=>$request->email,
            'phone'=>$request->phone,
            'type'=>User::ADMIN,
            'address'=>$request->address
        ]);
        return new AdminResource($admin);
    }


    public function destroy(Admin $admin){
        $admin->delete();
        return Response('',201);
    }



}
