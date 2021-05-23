@php
$items=[
['label'=>"Angel26", 'route' => 'home'],
['label'=>"Service", 'route' => 'service'],
['label'=>"Our Ladies", 'route' => 'ladies'],
['label'=>"What's On", 'route' => 'whatsOn'],
['label'=>"Contact Us", 'route' => 'contactUs'],
];
@endphp
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Angel26</title>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet" />
    <link href="{{ asset('css/app.css') }}" rel="stylesheet" />
</head>

<body class="font-sans antialiased" style="background-color: #75244F">
    <div class="relative" style="color: rgb(255, 199, 1)">
        <img class="absolute inset-x-0 top-0" src="/bosco/background.jpg" style="z-index: -10" />
        <img class="absolute top-32" src="/bosco/bg-girl.png" style="height: 596px; width: auto; z-index: -9; object-fit: cover;" title="girl" alt="girl" />
        <div class="flex flex-col items-center z-10">
            <div class="flex flex-row items-center mt-12">
                <img class="cursor-pointer mr-20" src="/bosco/logo.jpg" style="width: 300px" />
                @foreach ($items as $item)
                <div class="flex flex-col items-center relative" @if (request()->routeIs($item['route']))
                    style="background-image: url('/bosco/navcurbg.png'); background-repeat: no-repeat;"
                    @endif
                    >
                    <a class="cursor-pointer font-bold text-2xl mx-7 " href={{route($item['route'])}} style="padding: 20px 0;">
                        {{$item['label']}}
                    </a>
                </div>
                @endforeach
            </div>
            <div class="flex flex-row w-4/5 mb-80">
                <div class="flex flex-col ml-auto relative px-5" style="color: white">
                    <h1 class="text-5xl">Ph: 0450316989</h1>
                    <h1 class="text-2xl">xxxxxxxxx, Coopers Plains</h1>
                    <img class="absolute top-0 right-0 w-full" src="/bosco/title-bg-bottom.png" />
                </div>
            </div>
            <div style="margin-top: 190px">
                <h1 style="font-family: 'Platinum Blonde'; font-size: 50px; text-align: center; line-height: 70px;">Welcome to Asian Star! Brisbane’s best Brothel</h1>
                <p class="" style="text-align: center; width: 50%; margin: 0px auto; max-width: 100%;">
                    <strong>
                        Welcome to Asian Star! Brisbane’s best Asian Brothel. We have a wide range of ladies from China, Korea, Japan, Singapore, Thailand, Vietnam and other countries. However, we are not just limited to Asian ladies as we do welcome nice ladies from other nationalities. Our specialty we provide is our beautiful quality of ladies and the good services they offer you.
                    </strong>
                </p>
                <h2 style="font-family: 'Platinum Blonde'; font-size: 36px; text-align: center; margin-bottom: 10px; margin-top: 50px; line-height: 54px;" data-inline-fontsize="true" data-inline-lineheight="true" data-fontsize="36" data-lineheight="54">We are open!</h2>
                <p class="text-center">
                    <b>However, there are certain rules to follow based on COVID Safe sex industry plan, please follow the rules and keep us all safe：
                    </b>
                </p>
                <p class="text-center">
                    <b>Stay home if you feel unwell, you will be refused to stay if you are unwell
                    </b>
                </p>
                <p class="text-center">
                    <b>Practice Social distancing
                    </b>
                </p>
                <p class="text-center">
                    <b>Wash hand or using alcohol-based hand sanitizer ( will be provided here) upon arrival
                    </b>
                </p>
                <p class="text-center">
                    <b>You will be asked to provide contact details for contact tracing and we will keep it confidential and destroy after certain time;
                    </b>
                </p>
                <p class="text-center">
                    <b>Our premises will be limited to 20 people at a time; please try not to come in group; you may be asked to wait outside if we reach limitation;
                    </b>
                </p>
                <p class="text-center">
                    <b>We will perform more strict hygiene and sanitizing method which may cause longer waiting time; please be patient and understandable;
                    </b>
                </p>
                <p class="text-center">
                    <b>Fri and Sat nights we will closed at 3am instead of 4am
                    </b>
                </p>
                <p class="text-center">
                    <b>Stay safe and hope see you again soon!
                    </b>
                </p>
            </div>
            <div class="mt-20 p-5 w-full" style="background-color: #601B42">
                <span class="font-bold text-lg text-left">Copyright 2021 Angel26, all rights reserved.</span>
            </div>
        </div>
    </div>
</body>

</html>
