<?php


namespace App\Helper\Customers;

use App\Model\Users\Customer;

class CustomersHelper implements DefinedCustomer
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
        $customer= Customer::create([
            'name'=>$this->data->name,
            'email'=>$this->data->email,
            'phone'=>$this->data->phone,
            'password'=>$this->genaratePassword(),
            'type'=>User::CUSTOMER,
            'address'=>$this->data->address
        ]);
        return  $customer->id;

    }

    public function updateCustomer(): int{
        $customer=Customer::find($this->data->customer_id);
        $customer= tap($customer)->update([
            'name'=>$this->data->name,
            'email'=>$this->data->email,
            'phone'=>$this->data->phone,
            'address'=>$this->data->address
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
