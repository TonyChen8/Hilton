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
    if (isset($staff)) {
      $staff->fill($request->input())->save();
    } else {
      return abort(404);
    }
    return $this->staffs();
  }

  public function delete(Request $request, $id)
  {
    $staff = Staffs::find($id);
    if (isset($staff)) {
      $staff->delete();
    } else {
      return abort(404);
    }
    return $this->staffs();
  }
}
