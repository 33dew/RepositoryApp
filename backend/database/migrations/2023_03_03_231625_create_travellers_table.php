<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('travellers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('surname');
            $table->string('email');
            $table->string('phone');

            $table->string('adress');
            $table->string('city');
            $table->string('country');
            $table->string('avatar');

            $table->boolean('status');
            $table->timestamps();
        });

        Schema::create('traveller_passport_details', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('traveller_id');
            $table->foreign('traveller_id')
                ->references('id')
                ->on('travellers')
                ->onDelete('cascade');
            $table->string('passport_no');
            $table->date('date_of_bird');
            $table->date('date_of_issue');
            $table->date('date_of_expiry');
            $table->string('country_of_issue');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('traveller_passport_details');
        Schema::dropIfExists('travellers');
    }
};
