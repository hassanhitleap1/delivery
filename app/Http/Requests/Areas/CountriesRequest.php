<?php

namespace App\Http\Requests\User;
use App\Http\Requests\Request;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class CountriesRequest extends \App\Http\Requests\Api\FormRequest
{

    protected $createRules = [
        'title' => 'required|max:255',
    ];


    protected $updateRules = [
        'title' => 'required|max:255',
    ];

    protected $rules = [];

    public function createValidate(){
        $this->rules = $this->createRules;
        return $this->rules;
    }

    public function updateValidate(){
        $this->rules = $this->updateRules;
        return $this->rules;
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
