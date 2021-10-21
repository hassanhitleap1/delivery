<?php

namespace App\Http\Requests\User;
use App\Http\Requests\Request;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class CustomerRequest extends \App\Http\Requests\Api\FormRequest
{

    protected $createRules = [
        'name' => 'required|max:255',
        'email' => 'required|email|unique:users,email',
        'phone' => 'required|numeric|unique:users,phone',
    ];


    protected $updateRules = [
        'name' => 'required|max:255',
        'email' => 'required|email|unique:users,email',
        'phone' => 'required|numeric|unique:users,phone',
    ];

    protected $rules = [];

    public function createValidate($data){
        $this->rules = $this->createRules;
        return $this->validate($data);
    }

    public function updateValidate($data, $id){
        $this->updateRules['email'] = "required|email|unique:users,email,$id";
        $this->updateRules['phone'] = "required|unique:phone,phone,$id";
        $this->rules = $this->updateRules;
        return $this->validate($data);
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
        return [
            'name' => 'required|max:255',
            'email' => 'required|email|unique:users,email',
            'phone' => 'required|numeric|unique:users,phone',
        ];
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
