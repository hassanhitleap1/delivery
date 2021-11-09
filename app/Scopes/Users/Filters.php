<?php

namespace App\Scopes\Users;

use App\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;

class Filters implements Scope
{
    /**
     * Apply the scope to a given Eloquent query builder.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $builder
     * @param  \Illuminate\Database\Eloquent\Model  $model
     * @return void
     */
    public function apply(Builder $builder, Model $model)
    {
        if(isset($_GET['keywords']) && $_GET['keywords'] !=''){
            $keywords=$_GET['keywords'];
            $builder->where(function ($q)use ($keywords){
                $q->orwhere('name', 'like', "%$keywords%");
                $q->orwhere('phone', 'like', "%$keywords%");
                $q->orwhere('email', 'like', "%$keywords%");
            });

        }

    }
}
