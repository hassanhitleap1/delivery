<?php

namespace App\Http\Controllers\Shipments;

use App\Helper\File\FactoryFile\UnixUploaderFactory;
use App\Http\Controllers\Controller;
use App\Model\Shipments\Shipment;
use function Symfony\Component\HttpFoundation\Response;

class FileController  extends Controller
{
    public function upload(Request $request){
        $file = new UnixUploaderFactory();
        $path = $file->createXlsUploader()->upload($request);
        $inserted=$file->createCsvUploader()->fatch_to_array($path);
        Shipment::insert($inserted);
        return Response('',200);
    }
}
