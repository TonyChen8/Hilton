<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ScheduleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // if (DB::table("schedule")->count() == 0) {
        //     DB::table('schedule')->insert([
        //         ['day' => 'MON'],
        //         ['day' => 'TUE'],
        //         ['day' => 'WED'],
        //         ['day' => 'THU'],
        //         ['day' => 'FRI'],
        //         ['day' => 'SAT'],
        //         ['day' => 'SUN'],
        //     ]);
        // } else {
        //     echo "\e[31mTable is not empty, therefore NOT ";
        // }
    }
}
