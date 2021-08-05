<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateShipmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shipments', function (Blueprint $table) {
            $table->id();
            $table->string('policy_number');
            $table->integer('driver_id');
            $table->integer('customer_id');
            $table->smallInteger('status_id');
            $table->integer('areas_id');
            $table->string('address');
            $table->string('phone');
            $table->string('other_phone');
            $table->string('required_amount');
            $table->float('delivery_amount');
            $table->text('note');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('shipments');
    }
}
