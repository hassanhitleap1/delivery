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
            $table->string('policy_number')->nullable();
            $table->integer('driver_id');
            $table->integer('customer_id');
            $table->smallInteger('status_id');
            $table->integer('country_id');
            $table->integer('region_id');
            $table->integer('areas_id');
            $table->string('address')->nullable();
            $table->string('name')->nullable();
            $table->string('phone')->nullable();
            $table->string('other_phone');
            $table->float('required_amount')->nullable();
            $table->float('delivery_amount')->nullable();
            $table->smallInteger('approved')->default(\App\Model\Shipments\Shipment::NotApproved);
            $table->longtext('note');
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
