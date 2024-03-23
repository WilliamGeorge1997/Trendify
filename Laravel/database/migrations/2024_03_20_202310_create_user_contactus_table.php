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
        Schema::create('user_contactus', function (Blueprint $table) {
            $table->unsignedBigInteger('contactus_id');
            $table->unsignedBigInteger('user_id');
            $table->timestamps();
            $table->foreign('contactus_id')->references('id')->on('contact_us')->constrained()->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->constrained()->onDelete('cascade');
            $table->primary(['contactus_id', 'user_id']);

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_contactus');
    }
};
