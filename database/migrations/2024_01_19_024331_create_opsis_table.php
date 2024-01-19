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
        Schema::create('opsis', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('soal_id')->nullable();
            $table->foreign('soal_id')->references('id')->on('soals')->onDelete('cascade');
            $table->string('nama')->nullable();
            $table->integer('point')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('opsis');
    }
};
