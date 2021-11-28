<?php


namespace App\Http\Controllers\Shipments;
use App\Helper\Customers\CustomerHepler;
use App\Model\Shipments\Shipment;
use App\Http\Controllers\Controller;
use App\Http\Resources\Shipments\ShipmentsResource;
use  App\Http\Requests\Shipments\ShipmentsRequest;
use  App\Helper\Shipments\ShipmentsHelper;

class ShipmentController extends Controller
{
    public function __construct()
    {
    //    $this->middleware('jwt.verify')->only(['index','store','update','show','destroy']);
    }
    public function index(){
        return ShipmentsResource::collection(Shipment::paginate(10));
    }

    public function store(ShipmentsRequest $requests){
        $shipmentHelper = new ShipmentsHelper();


        foreach($requests->all() as  $request){
            
            $customerHelper = new CustomerHepler([
                'name'=>$request['name'],
                'email'=>NULL,//$request['email'],
                'phone'=>$request['phone'],
                'address'=>$request['address']
            ]);
            $policyNumber =$shipmentHelper->genaratePolicyNumber();
            $customer_id=$customerHelper->createAnewCustomer();
          
            
            $shipmentArray=[
                'policy_number'=>  $policyNumber ,
                'driver_id'=>$request['driver_id'],
                'customer_id'=>$customer_id,
                'status_id'=>$request['status_id'],
                'areas_id'=>$request['areas_id'],
                'address'=>$request['address'],
                'name'=>$request['name'],
                'phone'=>$request['phone'],
                'other_phone'=>$request['other_phone'],
                'required_amount'=>$request['required_amount'],
                'delivery_amount'=>$request['delivery_amount'],
                'note'=>$request['note'],

            ];
            $shipments[]  = Shipment::create($shipmentArray);
           
        }


        return ShipmentsResource::collection($shipments);


    }


    public function update(Shipment $shipment, ShipmentsRequest $request){

        $customerHelper = new CustomerHepler([
            'customer_id'=>$request->customer_id,
            'name'=>$request->name,
            'email'=>$request->email,
            'phone'=>$request->phone,
            'address'=>$request->address
        ]);


        $shipment=tap($shipment)->update([
            'policy_number'=>  $request->policy_number ,
            'driver_id'=>$request->driver_id,
            'status_id'=>$request->status_id,
            'areas_id'=>$request->areas_id,
            'address'=>$request->address,
            'name'=>$request['name'],
            'phone'=>$request->phone,
            'other_phone'=>$request->other_phone,
            'required_amount'=>$request->required_amount,
            'delivery_amount'=>$request->delivery_amount,
            'note'=>$request->note,

        ]);

        return new ShipmentsResource($shipment );
    }


    public function delete(Shipment $shipment){
        $shipment->delete();
        return Response('',201);
    }

    public function show(Shipment $shipment){
        return new ShipmentsResource($shipment );
    }
}
