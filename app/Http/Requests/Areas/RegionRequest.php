<?php

namespace App\Http\Requests\User;
use App\Http\Requests\Request;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class RegionRequest extends \App\Http\Requests\Api\FormRequest
{

    protected $createRules = [
        'name' => 'required|max:255',
        // 'email' => 'email|unique:users,email',
        'phone' => 'required|numeric|unique:users,phone',
    ];


    protected $updateRules = [
        'name' => 'required|max:255',
        // 'email' => 'email|unique:users,email',
        'phone' => 'required|numeric|unique:users,phone',
    ];

    protected $rules = [];

    public function createValidate(){
        $this->rules = $this->createRules;
        return $this->rules;
    }

    public function updateValidate(){
        $this->updateRules['email'] = "email|unique:users,email,$this->id";
        $this->updateRules['phone'] = "required|unique:phone,phone,$this->id";
        return $this->rules;
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
