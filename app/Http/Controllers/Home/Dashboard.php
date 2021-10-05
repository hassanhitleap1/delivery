<?php


namespace App\Http\Controllers\Home;


use App\Http\Controllers\Controller;
use App\Http\Resources\DashboardResource;
use App\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class Dashboard extends Controller
{


    public function index(){
        $date=Carbon::now()->toDateString();
        $data=User::select("count(*) as count_user",
            DB::row("(select (*) from orders where date(orders.cerated_at)='$date') as count_order"))
            ->first();
        return new DashboardResource($data);
    }
}
