<?php

namespace App\Helper\File\FactoryFile\XLS;

interface XlsUploader
{
    public function upload($request): string;
    public function store($uploadedFile , $filename): string;
    public function fatch_to_array($path):array;
}
