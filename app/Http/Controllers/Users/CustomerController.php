<?php


namespace App\Http\Controllers\Users;


use App\Http\Controllers\Controller;
use App\Http\Requests\User\CustomerRequest;
use App\Http\Resources\Users\CustomerResource;
use App\Model\Users\Customer;
use App\User;

class CustomerController extends  Controller
{
    public function index(){
        return CustomerResource::collection(Customer::paginate(10));
    }

    public function store(CustomerRequest $request){
        $customer= Customer::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'phone'=>$request->phone,
            'password'=>bcrypt($request->password),
            'type'=>User::CUSTOMER,
            'address'=>$request->address
        ]);
        return new CustomerResource($customer);
    }


    public function show(Customer $customer){
        return new CustomerResource($customer);
    }

    public function update(Customer $customer,CustomerRequest $request){
        $customer= tap($customer)->update([
            'name'=>$request->name,
            'email'=>$request->email,
            'phone'=>$request->phone,
            'type'=>User::CUSTOMER,
            'address'=>$request->address
        ]);
        return new CustomerResource($customer);
    }


    public function destroy(Customer $customer){
        $customer->delete();
        return Response('',201);
    }
}
