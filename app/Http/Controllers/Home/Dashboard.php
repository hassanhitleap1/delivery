<?php


namespace App\Http\Controllers\Home;


use App\Http\Controllers\Controller;
use App\Http\Resources\DashboardResource;
use App\User;
use Illuminate\Support\Facades\DB;

class Dashboard extends Controller
{
    public function __construct()
    {
        $this->middleware('jwt.verify');
    }

    public function index(){
        return [];
        $data=User::select(DB::raw('count(*) as count_user'),
            DB::raw('
                ( CASE
                    WHEN users.type = 1 THEN "admins"
                    WHEN users.type = 2 THEN "users"
                    WHEN users.type = 3 THEN "drivers"
                    ELSE "customers"
                END)
            as
             type_name'),
            'users.type')
            ->groupBy('users.type')->get();
        return new DashboardResource($data);
    }
}
