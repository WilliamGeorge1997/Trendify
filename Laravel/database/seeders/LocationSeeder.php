<?php

namespace Database\Seeders;

use App\Models\EgyptCity;
use Illuminate\Database\Seeder;

class LocationSeeder extends Seeder
{
    public function run()
    {
        EgyptCity::create(['id' => '1' , 'city_name' => 'Alexandria']);
        // Add more locations as needed
    }
}
