<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Staffs;

class StaffsController extends Controller
{
  public function index()
  {
    return view('staffs');
  }

  public function store(Request $request)
  {
    $id = $request->input('id');
    Staffs::firstOrCreate(['id' => $id]);
    return $this->staffs();
  }

  public function staffs()
  {
    $staff = Staffs::get();
    return response()->json($staff);
  }
}
