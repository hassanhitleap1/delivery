<?php

namespace App\Helper\File\FactoryFile\XLS;

interface XlsUploader
{
    public function upload($request): void;
    public function store($uploadedFile , $filename): string;
}
