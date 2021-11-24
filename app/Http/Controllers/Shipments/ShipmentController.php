<?php


namespace App\Http\Controllers\Shipments;
use App\Helper\Customers\CustomersHelper;
use App\Model\Shipments\Shipment;
use App\Http\Controllers\Controller;
use App\Http\Resources\Shipments\ShipmentsResource;

class ShipmentController extends Controller
{
    public function __construct()
    {
    //    $this->middleware('jwt.verify')->only(['index','store','update','show','destroy']);
    }
    public function index(){
        return ShipmentsResource::collection(Shipment::paginate(10));
    }

    public function create(ShipmentsRequest $request){
        $shipmentHelper = new ShipmentsHelper();

        $customerHelper = new CustomersHelper([
            'name'=>$request->name,
            'email'=>$request->email,
            'phone'=>$request->phone,
            'address'=>$request->address
        ]);


        $policyNumber =$shipmentHelper->genaratePolicyNumber();
        $customer_id=$customerHelper->createAnewCustomer();

        $shipmentArray=[
            'policy_number'=>  $policyNumber ,
            'driver_id'=>$request->driver_id,
            'customer_id'=>$customer_id,
            'status_id'=>$request->status_id,
            'areas_id'=>$request->areas_id,
            'address'=>$request->address,
            'phone'=>$request->phone,
            'other_phone'=>$request->other_phone,
            'required_amount'=>$request->required_amount,
            'delivery_amount'=>$request->delivery_amount,
            'note'=>$request->note,

        ];

        $shipment  = Shipment::cerate($shipmentArray);
        return new ShipmentsResource($shipment );
    }


    public function update(Shipment $shipment, ShipmentsRequest $request){

        $customerHelper = new CustomerHelper([
            'customer_id'=>$customer_id,
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
