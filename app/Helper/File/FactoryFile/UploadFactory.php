<?php

namespace App\Helper\File\FactoryFile;

use App\Helper\File\FactoryFile\CSV\CsvFileUploader;
use App\Helper\File\FactoryFile\CSV\JsonFileUploader;
use App\Helper\File\FactoryFile\XLS\XLSFileUploader;

interface UploadFactory
{
    public function createCsvUploader(): CsvFileUploader;
    public function createXlsUploader(): XLSFileUploader;
    public function createJsonUploader(): JsonFileUploader;
}
