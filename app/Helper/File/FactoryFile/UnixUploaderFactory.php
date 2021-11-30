<?php

namespace App\Helper\File\FactoryFile;

use App\Helper\File\FactoryFile\CSV\JsonFileUploader;

class UnixUploaderFactory implements UploadFactory
{

    public function createCsvUploader(): CsvFileUploader
    {
        // TODO: Implement createCsvUploader() method.
        return  new CsvFileUploader();
    }

    public function createXlsUploader(): XlsFileUploader
    {
        // TODO: Implement createXlsUploader() method.
        return  new XlsFileUploader();
    }

    public function createJsonUploader(): JsonFileUploader
    {
        // TODO: Implement createJsonUploader() method.
        return  new JsonFileUploader();
    }
}
