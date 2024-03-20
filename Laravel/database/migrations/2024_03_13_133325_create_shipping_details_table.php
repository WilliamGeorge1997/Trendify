<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('shipping_details', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('cart_id');
            $table->string('phone');
            $table->unsignedBigInteger('city_id');
            $table->string('address', 200);
            $table->integer('zip_code');
            $table->foreign('cart_id')->references('id')->on('carts')->constrained()->onDelete('cascade');
            $table->foreign('city_id')->references('id')->on('egypt_cities')->constrained()->onDelete('cascade');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shipping_details');
    }
};
