<?php

namespace App\Http\Middleware;

use Closure;
use JWTAuth;
use Exception;
use Tymon\JWTAuth\Http\Middleware\BaseMiddleware;

class JwtMiddleware extends BaseMiddleware
{

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        try {

            $user = JWTAuth::parseToken()->authenticate();

        } catch (Exception $e) {
            if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenInvalidException){
//                return response()->json(['status'=>600,'massage' => 'Token is Invalid']);
                return response()->json(['code'=>600,'massage' => 'Token is Invalid'], 401);
            }else if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenExpiredException){
                return response()->json(['code'=>601,'massage' => 'Token is Expired'], 401);
//                return response()->json(['status'=>601,'massage' => 'Token is Expired']);
            }else{
                return response()->json(['code'=>602,'massage' => 'Authorization Token not found'], 401);
//                return response()->json(['status'=>602,'massage' => 'Authorization Token not found']);
            }
        }
        return $next($request);
    }
}
