<?php

namespace App\Http\Requests\Shipments;
use App\Http\Requests\Request;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class ShipmentsRequest extends \App\Http\Requests\Api\FormRequest
{

    protected $createRules = [
        'name.*.finding'=> 'required|max:255',
        'driver_id.*.finding'=>'numeric',
        'status_id.*.finding'=>'required|numeric',
        'customer_id.*.finding'=>'required|numeric',
        'areas_id.*.finding'=>'numeric',
        'address.*.finding'=> 'required|max:255',
        'phone.*.finding'=> 'required|max:255',
        'other_phone.*.finding'=> 'max:255',
        'required_amount.*.finding'=>'required|numeric',
        'delivery_amount.*.finding'=>'required|numeric',
        'note.*.finding'=>'required|numeric',

    ];


    protected $updateRules = [
        'name'=> 'required|max:255',
        'driver_id'=>'numeric',
        'status_id'=>'required|numeric',
        'customer_id'=>'required|numeric',
        'areas_id'=>'numeric',
        'address'=> 'required|max:255',
        'phone'=> 'required|max:255',
        'other_phone'=> 'max:255',
        'required_amount'=>'required|numeric',
        'delivery_amount'=>'required|numeric',
        'note'=>'required|numeric',
    ];

    protected $rules = [];

    public function createValidate(){
   
        return $this->createRules;
    }

    public function updateValidate(){
     
        return $this->updateRules;
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        if (in_array($this->method(), ['PUT', 'PATCH'])) {
            return  $this->updateValidate();
        }else{
            return  $this->createValidate();
        }

    }




    /**
     * Returns validations errors.
     *
     * @param Validator $validator
     * @throws  HttpResponseException
     */
    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'errors' => $validator->errors(),
            'status' => 422
        ], 422));

        parent::failedValidation($validator);
    }
}
