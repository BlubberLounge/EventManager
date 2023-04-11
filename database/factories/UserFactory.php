<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $this->faker->locale('de_DE');

        return [
            'name' => fake()->unique()->userName(),
            'firstname' => fake()->firstName(),
            'lastname' => fake()->lastName(),
            'email' => fake()->unique()->safeEmail(),
            'telefon_mobil' => fake()->unique()->e164PhoneNumber(),
            'dob' => fake()->boolean(80) ? fake()->dateTime() : null,
            'img' => '/storage/avatar/avatar-dummy.png',
            'email_verified_at' => fake()->boolean(55) ? now() : null,
            'password' => '$2a$10$T1FoiqONCMoK8JidUKKzcOwrR7GPpj8y0jU2uYyCTB8GOK/voxlve',  //blem-d3v3l0pment
                //'$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
