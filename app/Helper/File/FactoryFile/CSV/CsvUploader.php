<?php

namespace App\Helper\File\FactoryFile\CSV;

interface CsvUploader
{
    public function upload($request): void;
    public function store($uploadedFile , $filename): string;
}
