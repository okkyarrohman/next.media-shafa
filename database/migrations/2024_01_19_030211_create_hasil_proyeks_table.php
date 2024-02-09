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
        Schema::create('hasil_proyeks', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->unsignedBigInteger('proyek_id')->nullable();
            $table->foreign('proyek_id')->references('id')->on('proyeks')->onDelete('cascade');
            $table->longText('answer1')->nullable();
            $table->string('konfirmasi1')->nullable();
            $table->string('answer2')->nullable();
            $table->string('konfirmasi2')->nullable();
            $table->string('answer3')->nullable();
            $table->string('konfirmasi3')->nullable();
            $table->string('answer4')->nullable();
            $table->string('konfirmasi4')->nullable();
            $table->integer('nilai')->nullable();
            $table->string('catatan')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hasil_proyeks');
    }
};
