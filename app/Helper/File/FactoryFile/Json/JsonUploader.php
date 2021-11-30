<?php

namespace App\Helper\File\FactoryFile\CSV;

interface JsonUploader
{
    public function upload($request): void;
    public function store($uploadedFile , $filename): string;
}
