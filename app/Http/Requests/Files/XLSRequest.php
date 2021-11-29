<?php
namespace App\Http\Requests\Files;
use App\Http\Requests\Request;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class XLSRequest extends \App\Http\Requests\Api\FormRequest
{

    protected $createRules = [
        'file' =>'required|max:50000|mimes:xlsx,doc,docx,ppt,pptx,ods,odt,odp',
    ];

    protected $updateRules = [
        'file' =>'required|max:50000|mimes:xlsx,doc,docx,ppt,pptx,ods,odt,odp',
    ];


    public function createValidate()
    {
        return $this->createRules;
    }

    public function updateValidate()
    {
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
            return $this->updateValidate();
        } else {
            return $this->createValidate();
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
