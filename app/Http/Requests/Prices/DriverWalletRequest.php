<?php

namespace App\Http\Requests\Prices;
use App\Http\Requests\Request;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class DriverWalletRequest extends \App\Http\Requests\Api\FormRequest
{

    protected $createRules = [
        'balance'=>'required|numeric',
        'custmer_id'=>'required|numeric',
    ];


    protected $updateRules = [
        'price'=>'required|numeric',
        'custmer_id'=>'required|numeric',
    ];



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
