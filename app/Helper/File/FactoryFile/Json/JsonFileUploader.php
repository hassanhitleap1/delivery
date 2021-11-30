<?php

namespace App\Helper\File\FactoryFile\CSV;

class JsonFileUploader implements JsonUploader
{

    public function upload($request): void
    {
        // TODO: Implement upload() method.
        $uploadedFile = $request->file('file');
        $filename = $uploadedFile->getClientOriginalName();
        $this->store($uploadedFile,$filename);
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
}
