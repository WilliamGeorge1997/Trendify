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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('title', 250);
            $table->longtext('description');
            $table->string('price');
            $table->integer('stock')->nullable();
            $table->float('rate')->nullable()->unsigned();
            $table->unsignedBigInteger('location_id')->nullable();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('category_id');
            $table->timestamps();
            $table->foreign('location_id')->references('id')->on('egypt_cities')->constrained()->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->constrained()->onDelete('cascade');
            $table->foreign('category_id')->references('id')->on('categories')->constrained()->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
