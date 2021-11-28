<?php


namespace App\Helper\Customers;

use App\Model\Users\Customer;
use App\User;

class CustomerHepler implements DefinedCustomer
{

    private $data;
    public function __construct($data) {
        $this->data = $data;
      }
    /**
     * createAnewCustomer
     * @override
     * @return int
     */
    public function createAnewCustomer(): int{
        $customer=$this->findCustomerByPhone($this->data['phone']);
        
        if(is_null($customer)){
            $customer= Customer::create([
                'name'=>$this->data['name'],
                'email'=>$this->data['email'],
                'phone'=>$this->data['phone'],
                'password'=>$this->genaratePassword(),
                'type'=>User::CUSTOMER,
                'address'=>$this->data['address']
            ]);
    
        }else{
            $customer= tap($customer)->update([
                'name'=>$this->data['name'],
                'email'=>$this->data['email'],
                'address'=>$this->data['address']
            ]); 
        }
        
        return  $customer->id;

    }

    public function findCustomer($customer_id)
    {
        return Customer::find($this->data['customer_id']);
    }

    public function findCustomerByPhone($phone)
    {
        return Customer::where('phone',$phone)->first();
    }

    public function updateCustomer(): int{
        $customer=$this->findCustomer($this->data['customer_id']);
        $customer= tap($customer)->update([
            'name'=>$this->data['name'],
            'email'=>$this->data['email'],
            'address'=>$this->data['address']
        ]);
        return  $customer->id;

    }


    /**
     * genaratePassword
     * @override
     * @return string
     */
    public function genaratePassword(): string{
        return bcrypt(123456);

    }


}
?>
