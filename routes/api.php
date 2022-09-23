<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('/companies',App\Http\Controllers\Api\CompanyController::class);

Route::post('/posting','App\Http\Controllers\Api\CompanyController@posting');

Route::put('/{id}/updating','App\Http\Controllers\Api\CompanyController@updating');

Route::get('/user_id/{id}','App\Http\Controllers\Api\CompanyController@my_companies_fnct');

Route::post('savePage','App\Http\Controllers\Api\pageController@savePage');

Route::post('get_pages_of_project','App\Http\Controllers\Api\pageController@get_pages_of_project');

Route::post('get_id_page','App\Http\Controllers\Api\pageController@get_id_page');

Route::post('delete_page','App\Http\Controllers\Api\pageController@delete_page');

Route::get('/companiesByid/{id}','App\Http\Controllers\Api\CompanyController@getcompanyByID');

