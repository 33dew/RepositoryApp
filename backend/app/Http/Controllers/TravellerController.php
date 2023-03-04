<?php

namespace App\Http\Controllers;

use App\Models\Traveller;
use Illuminate\Http\Request;

class TravellerController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['index', 'show']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json([
            'status' => 'success',
            'travellers' => Traveller::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Traveller  $traveller
     * @return \Illuminate\Http\Response
     */
    public function show(Traveller $traveller)
    {
        return response()->json([
            'status' => 'success',
            'traveller' => $traveller,
            'passport_details' => $traveller->passportdetails(),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Traveller  $traveller
     * @return \Illuminate\Http\Response
     */
    public function edit(Traveller $traveller)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Traveller  $traveller
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Traveller $traveller)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Traveller  $traveller
     * @return \Illuminate\Http\Response
     */
    public function destroy(Traveller $traveller)
    {
        //
    }
}
