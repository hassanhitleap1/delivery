<?php

namespace App\Helper\File\FactoryFile\CSV;

interface JsonUploader
{
    public function upload($request): string;
    public function store($uploadedFile , $filename): string;
    public function fatch_to_array($path):array;
}
