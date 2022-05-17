<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Laravel') }}</title>
    <!-- Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">
    <!-- Styles -->
    <link rel="stylesheet" href="{{ asset('css/animate.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/toastr.css') }}">
    <link rel="stylesheet" href="{{ mix('css/app.css') }}?ver={{(new DateTime())->getTimestamp()}}">
    <!-- Scripts -->
    <script src="{{ mix('js/staffs.js') }}?ver={{(new DateTime())->getTimestamp()}}" defer></script>
</head>

<body class="font-sans antialiased">
    <div class="h-screen bg-gray-100 flex flex-col w-screen">
        @include('layouts.navigation')
        <!-- Page Content -->
        <div id="reactjs" class="flex-1 w-4/5 mx-auto p-12 overflow-hidden"></div>
    </div>
</body>

</html>
