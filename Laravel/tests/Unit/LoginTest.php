<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

require './src/Login.php';

class LoginTest extends TestCase
{
    use RefreshDatabase;
    public function testLoginWithValidCredentials()
    {

        $userData = [
            'name' => 'example',
            'email' => 'example@example.com',
            'password' => 'password123',
            'password_confirmation' => 'password123',
            'phone' => '01234456789',
        ];
        $this->json('POST', 'api/register', $userData)
            ->assertStatus(200);


        $response = $this->json('POST', 'api/login', [
            'email' => 'example@example.com',
            'password' => 'password123',
        ]);


        $response->assertStatus(200)
            ->assertJson([
                'status' => 200,
                'message' => 'success',
                'user' => [
                    'name' => "example",
                    'email' => "example@example.com",
                ],
                'token' => true,

            ]);
    }
    public function testLoginWithInvalidEmail()
    {

        $userData = [
            'name' => 'example',
            'email' => 'example@example.com',
            'password' => 'password123',
            'password_confirmation' => 'password123',
            'phone' => '01234456789',
        ];
        $this->json('POST', 'api/register', $userData)
            ->assertStatus(200);


        $response = $this->json('POST', 'api/login', [
            'email' => 'example@',
            'password' => 'password123',
        ]);


        $response->assertStatus(400)
            ->assertJson([
                'status' => 400,
                'message' => 'Please enter a valid email address.',
            ]);
    }

    public function testLoginWithRequiredField()
    {

        $userData = [
            'name' => 'example',
            'email' => 'example@example.com',
            'password' => 'password123',
            'password_confirmation' => 'password123',
            'phone' => '01234456789',
        ];
        $this->json('POST', 'api/register', $userData)
            ->assertStatus(200);


        $response = $this->json('POST', 'api/login', [
            'email' => 'example@example.com',
        ]);


        $response->assertStatus(400)
            ->assertJson([
                'status' => 400,
                'message' => 'The password field is required.',
            ]);
    }

    public function testLoginWithInvalidCredentials()
    {

        $userData = [
            'name' => 'example',
            'email' => 'example@example.com',
            'password' => 'password123',
            'password_confirmation' => 'password123',
            'phone' => '01234456789',
        ];
        $this->json('POST', 'api/register', $userData)
            ->assertStatus(200);


        $response = $this->json('POST', 'api/login', [
            'email' => 'example2@example.com',
            'password' => '123password',
        ]);


        $response->assertStatus(401)
            ->assertJson([
                'status' => 401,
                'message' => 'Invalid credentials',
            ]);
    }
}
