<?php

namespace App\Http\Controllers;

use App\Models\Notices;
use Illuminate\Http\Request;

class NoticesController extends Controller
{
  public function index()
  {
    return view('notices');
  }

  public function store(Request $request)
  {
    $notice = Notices::create();
    return $this->notices();
  }

  public function notices()
  {
    $notice = Notices::all();
    return response()->json($notice);
  }

  public function update(Request $request, $id)
  {
    $notice = Notices::find($id);
    if (isset($notice)) {
      $notice->fill($request->input())->save();
    } else {
      return abort(404);
    }
    return $this->notices();
  }

  public function delete(Request $request, $id)
  {
    $notice = Notices::find($id);
    if (isset($notice)) {
      $notice->delete();
    } else {
      return abort(404);
    }
    return $this->notices();
  }
}
