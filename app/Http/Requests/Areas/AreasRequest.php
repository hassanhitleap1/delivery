<?php

namespace App\Http\Requests\Areas;
use App\Http\Requests\Request;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class AreasRequest extends \App\Http\Requests\Api\FormRequest
{

    protected $createRules = [
        'name' => 'required|max:255',
        'region_id'=>'required|numeric'
    ];


    protected $updateRules = [
        'name' => 'required|max:255',
        'region_id'=>'required|numeric'
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
