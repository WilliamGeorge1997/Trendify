<?php

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

require './src/Register.php';
class RegisterTest extends TestCase
{
    use RefreshDatabase;

    public function testValidRegistration()
    {
        $userData = [
            'name' => 'example',
            'email' => 'example@example.com',
            'password' => 'password123',
            'password_confirmation' => 'password123',
            'phone' => '01234456789',
        ];
        $response = $this->json('POST', 'api/register', $userData);
        $response->assertStatus(200)
            ->assertJson([
                'status' => 200,
                'message' => 'success',

            ]);
        $this->assertDatabaseHas('users', ['email' => 'example@example.com']);
    }

    public function testRequiredField()
    {
        $invalidUserData = [
            'email' => 'example@example.com',
            'password' => 'password123',
            'password_confirmation' => 'password123',
            'phone' => '01234456789',
        ];

        $response = $this->json('POST', 'api/register', $invalidUserData);

        $response->assertStatus(400);

        $response->assertJson([
            'status' => 400,
            'message' => 'The name field is required.',
        ]);
    }




    public function testWrongConfirmationPassword()
    {
        $invalidUserData = [
            'name' => 'example',
            'email' => 'example@example.com',
            'password' => 'password123',
            'password_confirmation' => 'password',
            'phone' => '01234456789',
        ];

        $response = $this->json('POST', 'api/register', $invalidUserData);

        $response->assertStatus(400);

        $response->assertJson([
            'status' => 400,
            'message' => 'The password confirmation does not match.',
        ]);
    }


    public function testValidEmail()
    {
        $invalidUserData = [
            'name' => 'example',
            'email' => 'example@',
            'password' => 'password123',
            'password_confirmation' => 'password123',
            'phone' => '01234456789',
        ];

        $response = $this->json('POST', 'api/register', $invalidUserData);

        $response->assertStatus(400);

        $response->assertJson([
            'status' => 400,
            'message' => 'Please enter a valid email address.',
        ]);
    }


    public function testShortPassword()
    {
        $invalidUserData = [
            'name' => 'example',
            'email' => 'example@example.com',
            'password' => '123',
            'password_confirmation' => '123',
            'phone' => '01234456789',
        ];

        $response = $this->json('POST', 'api/register', $invalidUserData);

        $response->assertStatus(400);

        $response->assertJson([
            'status' => 400,
            'message' => 'The password must be at least 8 characters.',
        ]);
    }
}
