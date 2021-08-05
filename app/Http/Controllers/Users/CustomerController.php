<?php


namespace App\Http\Controllers\Users;


use App\Http\Controllers\Controller;
use App\Http\Resources\Users\CustomerResource;
use App\Model\Users\Customer;
use Illuminate\Http\Request;

class CustomerController extends  Controller
{
    public function index(){
        return CustomerResource::collection(Customer::all());
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
