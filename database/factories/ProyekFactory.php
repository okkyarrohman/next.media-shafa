<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Proyek>
 */
class ProyekFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nama' => $this->faker->name(),
            'proses1' => $this->faker->randomElement(['Deskripsi Proyek']),
            'file1' => $this->faker->imageUrl(),
            'proses2' => $this->faker->randomElement(['Perencanaan Proyek']),
            'file2' => $this->faker->imageUrl(),
            'proses3' => $this->faker->randomElement(['Perancangan Proyek']),
            'file3' => $this->faker->imageUrl(),
            'proses4' => $this->faker->randomElement(['Pengembangan Proyek']),
            'file4' => $this->faker->imageUrl(),
        ];
    }
}
