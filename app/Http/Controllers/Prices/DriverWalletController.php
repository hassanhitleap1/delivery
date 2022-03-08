<?php


namespace App\Http\Controllers\Prices;

use App\Http\Controllers\Controller;
use App\Http\Requests\Prices\DriverWalletRequest;
use App\Http\Resources\Prices\DriverWalletResource;
use App\Model\Prices\Wallet;


class DriverWalletController extends  Controller
{
    public function __construct()
    {
     //   $this->middleware('jwt.verify')->only(['index','store','update','show','destroy']);
    }
    public function index(){
        return DriverWalletResource::collection(DriverWallet::paginate(10));
    }

    public function store(DriverWalletRequest $request){
       $price= DriverWallet::create([
            'balance'=>$request->balance,
            'custmer_id'=>$request->custmer_id,
        ]);
        return new DriverWalletResource($price);
    }


    public function show(DriverWallet $wallet){
        return new DriverWalletResource($wallet);
    }

    public function update(DriverWallet $wallet,DriverWalletRequest $request){

        $wallet= tap($wallet)->update([
            'balance'=>$request->balance,
            'custmer_id'=>$request->custmer_id,
        ]);

        return new DriverWalletResource($wallet);
    }


    public function destroy(DriverWallet $wallet){
        $wallet->delete();
        return Response('',201);
    }




}
