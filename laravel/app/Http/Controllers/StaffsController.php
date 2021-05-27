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
    // $id = $request->input('id');
    $staff = Staffs::create();
    return $this->staffs();
  }

  public function staffs()
  {
    $staff = Staffs::get();
    return response()->json($staff);
  }

  public function update(Request $request, $id)
  {
    $staff = Staffs::find($id);
    if(isset($staff)){
        $staff->fill($request->input())->save();
    }
    return response()->json($staff);
  }
}
