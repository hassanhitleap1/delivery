<?php


namespace App\Http\Controllers\Users;


use App\Http\Controllers\Controller;
use App\Http\Requests\User\CustomerRequest;
use App\Http\Resources\Users\CustomerResource;
use App\Model\Prices\Wallet;
use App\Model\Users\Customer;
use App\User;

class CustomerController extends  Controller
{
    public function __construct()
    {
      //  $this->middleware('jwt.verify')->only(['index','store','update','show','destroy']);
    }
    public function index(){
        return CustomerResource::collection(Customer::paginate(10));
    }
    public function list_custmers(){
        return CustomerResource::collection(Customer::all());
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
        Wallet::create([
             'custmer_id'=>$customer->id,
             'balance'=>0,
         ]);
        return new CustomerResource($customer);
    }


    public function show($id){
        $customer=Customer::find($id);
        return new CustomerResource($customer);
    }


    public function update($id,CustomerRequest $request){
        $customer=Customer::find($id);
        $customer= tap($customer)->update([
            'name'=>$request->name,
            'email'=>$request->email,
            'phone'=>$request->phone,
            'type'=>User::CUSTOMER,
            'address'=>$request->address
        ]);
        return new CustomerResource($customer);
    }


    public function destroy($id){
        $customer=Customer::find($id);
        $customer->delete();
        return Response('',201);
    }
}
