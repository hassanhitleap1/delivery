<?php


namespace App\Http\Controllers\Users;


use App\Http\Controllers\Controller;
use App\Http\Resources\Users\CustomerResource;
use App\Model\Users\Customer;
use App\Model\Users\Driver;

class DriverController extends Controller
{
    public function index(){
        return DriverResource::collection(Driver::all());
    }

    public function store(DriverRequest $request){
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


    public function show(Driver $driver){
        return new DriverResource($driver);
    }

    public function update(Driver $driver,DriverRequest $request){
        $driver= $driver->update([
            'name'=>$request->name,
            'email'=>$request->email,
            'phone'=>$request->phone,
            'type'=>User::CUSTOMER,
            'address'=>$request->address
        ]);
        return new DriverResource($driver);
    }


    public function destroy(Driver $driver){
        $driver->delete();
        return Response('',201);
    }
}
