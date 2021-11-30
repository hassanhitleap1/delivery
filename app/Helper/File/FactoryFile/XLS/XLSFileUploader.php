<?php

namespace App\Helper\File\FactoryFile\XLS;

class XLSFileUploader implements XlsUploader
{

    public function upload($request): string
    {
        // TODO: Implement upload() method.
        $uploadedFile = $request->file('file');
        $filename = $uploadedFile->getClientOriginalName();
        return $this->store($uploadedFile,$filename);
    }

    public function store($uploadedFile , $filename): string{
        // TODO: Implement upload() method.
        $path=date('Y').'/'.date('m').'/'.date('d');
        Storage::disk('local')->putFileAs(
            "files/$path/$filename",
            $uploadedFile,
            $filename);
        return "files/$path/$filename";
    }

    public function fatch_to_array($path) : array{
        if ( $xlsx = SimpleXLSX::parse($path) ) {
            return $xlsx->rows() ;
        } else {
            throw new \Exception(SimpleXLSX::parseError()) ;
        }
    }
}
