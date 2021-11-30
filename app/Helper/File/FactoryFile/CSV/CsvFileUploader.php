<?php

namespace App\Helper\File\FactoryFile\CSV;

class CsvFileUploader implements JsonUploader
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

    public function fatch_to_array($path):array{
        $file = fopen($path, 'r');
        $array_shipments=[];
        while (($line = fgetcsv($file)) !== FALSE) {
            //$line is an array of the csv elements
            $array_shipments[]=$line;
        }
        fclose($file);
        return $array_shipments;
    }
}
