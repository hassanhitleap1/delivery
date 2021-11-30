<?php

namespace App\Helper\File\FactoryFile;

use App\Helper\File\FactoryFile\CSV\CsvFileUploader;
use App\Helper\File\FactoryFile\CSV\JsonFileUploader;
use App\Helper\File\FactoryFile\XLS\XLSFileUploader;

class UnixUploaderFactory implements UploadFactory
{

    public function createCsvUploader(): CsvFileUploader
    {
        // TODO: Implement createCsvUploader() method.
        return  new CsvFileUploader();
    }

    public function createXlsUploader(): XLSFileUploader
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
