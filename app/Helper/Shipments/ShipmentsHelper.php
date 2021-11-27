<?php 


namespace App\Helper\Shipments;

class ShipmentsHelper implements PolicyNumberInterface 
{ 
    //  private $perfix = env("PERFIX");
    /**
     * genaratePolicyNumber
     * @override
     * @return string
     */
    public function genaratePolicyNumber(){
        $number =  rand(100,100000);
        // $number .= $perfix;
        return  $number;

    }
}
?>