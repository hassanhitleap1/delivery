<?php


namespace App\Http\Controllers\Users;


use App\Http\Controllers\Controller;
use App\Http\Resources\Users\CustomerResource;
use App\Model\Users\Customer;
use App\User;
use Illuminate\Http\Request;

class CustomerController extends  Controller
{
    public function index(){
        return CustomerResource::collection(Customer::all());
    }

    public function store(CustomerRequest $request){
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


    public function show(Customer $customer){
        return new CustomerResource($customer);
    }

    public function update(Customer $customer,CustomerRequest $request){
        $customer= $customer->update([
            'name'=>$request->name,
            'email'=>$request->email,
            'phone'=>$request->phone,
            'type'=>User::CUSTOMER,
            'address'=>$request->address
        ]);
        return new AdminResource($customer);
    }


    public function destroy(Customer $customer){
        $customer->delete();
        return Response('',201);
    }
}
