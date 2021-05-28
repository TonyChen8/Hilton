<?php

namespace App\Http\Controllers;

use App\Models\Schedule;
use Illuminate\Http\Request;

class ScheduleController extends Controller {
	public function index() {
		return view('schedule');
	}

	public function store(Request $request) {
		$schedules = $request->input("schedules");

		$days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

		if (isset($schedules) && count($schedules) > 0) {
			Schedule::truncate();
			foreach ($schedules as $item) {
				$plan = Schedule::create();

				$plan->staff_id = $item['id'];
				$calendar = $item['schedules'];
				foreach ($days as $index => $day) {
					$plan[$day] = isset($calendar) && (count($calendar) > 0) ? $calendar[$index] : null;
				}
				$plan->save();
			}
		} else {
			return abort(400);
		}

		return Schedule::all();
	}

  public function schedules(Request $request) {
    return Schedule::all();
  }
}
