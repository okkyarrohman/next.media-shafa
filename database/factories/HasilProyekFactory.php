<?php

namespace Database\Factories;

use App\Models\Proyek;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\HasilProyek>
 */
class HasilProyekFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => function () {
                return User::inRandomOrder()->first();
            },
            'proyek_id' => function () {
                return Proyek::inRandomOrder()->first();
            },
            'answer1' => $this->faker->sentence(),
            'answer2' => $this->faker->imageUrl(),
            'answer3' => $this->faker->imageUrl(),
            'answer4' => $this->faker->imageUrl(),
            'konfirmasi1' => $this->faker->randomElement(['Tolak', 'Terima']),
            'konfirmasi2' => $this->faker->randomElement(['Tolak', 'Terima']),
            'konfirmasi3' => $this->faker->randomElement(['Tolak', 'Terima']),
            'konfirmasi4' => $this->faker->randomElement(['Tolak', 'Terima']),
            'nilai' => $this->faker->numberBetween(10, 100),
            'catatan' => $this->faker->sentence(),
        ];
    }
}
