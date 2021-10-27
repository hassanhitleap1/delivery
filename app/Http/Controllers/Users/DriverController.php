<?php


namespace App\Http\Controllers\Users;


use App\Http\Controllers\Controller;
use App\Http\Resources\Users\CustomerResource;
use App\Http\Resources\Users\DriverResource;
use App\Model\Users\Customer;
use App\Model\Users\Driver;
use App\Model\Users\Users;
use App\User;

class DriverController extends Controller
{
    public function index(){
        return DriverResource::collection(Driver::all());
    }

    public function store(DriverRequest $request){
        $driver= Driver::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'phone'=>$request->phone,
            'password'=>bcrypt($request->password),
            'type'=>User::DRIVER,
            'address'=>$request->address
        ]);
        return new DriverResource($driver);
    }


    public function show(Driver $driver){
        return new DriverResource($driver);
    }

    public function update(Driver $driver,DriverRequest $request){
        $driver= tap($driver)->update([
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
