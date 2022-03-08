<?php


namespace App\Http\Controllers\Prices;

use App\Http\Controllers\Controller;
use App\Http\Requests\Prices\WalletRequest;
use App\Http\Resources\Prices\WalletResource;
use App\Model\Prices\Wallet;


class WalletController extends  Controller
{
    public function __construct()
    {
     //   $this->middleware('jwt.verify')->only(['index','store','update','show','destroy']);
    }
    public function index(){
        return WalletResource::collection(Wallet::paginate(10));
    }

    public function store(WalletRequest $request){
       $price= Wallet::create([
            'balance'=>$request->balance,
            'custmer_id'=>$request->custmer_id,
        ]);
        return new WalletResource($price);
    }


    public function show(Wallet $wallet){
        return new WalletResource($wallet);
    }

    public function update(Wallet $wallet,WalletRequest $request){

        $wallet= tap($wallet)->update([
            'balance'=>$request->balance,
            'custmer_id'=>$request->custmer_id,
        ]);

        return new WalletResource($wallet);
    }


    public function destroy(Wallet $wallet){
        $wallet->delete();
        return Response('',201);
    }




}
