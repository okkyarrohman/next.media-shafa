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
        Schema::create('proyeks', function (Blueprint $table) {
            $table->id();
            $table->string('nama')->nullable();
            $table->string('proses1')->nullable();
            $table->string('file1')->nullable();
            $table->string('proses2')->nullable();
            $table->string('file2')->nullable();
            $table->string('proses3')->nullable();
            $table->string('file3')->nullable();
            $table->string('proses4')->nullable();
            $table->string('file4')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('proyeks');
    }
};
