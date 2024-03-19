<?php

namespace App\Http\Controllers;

use App\Models\EgyptCity;
use Illuminate\Http\Request;

class EgyptCityController extends Controller
{

    public function getAllCities()
{

    $cities = EgyptCity::all();


    return response()->json(['cities' => $cities], 200);
}

}
