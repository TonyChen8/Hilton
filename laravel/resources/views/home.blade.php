<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Angel26</title>
        <!-- Fonts -->
        <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap"
            rel="stylesheet"
        />
        <link href="{{ asset('css/app.css') }}" rel="stylesheet" />
    </head>

    <body class="font-sans antialiased" style="background-color: #75244F">
        <div class="relative" style="color: rgb(255, 199, 1)">
            <img
                class="absolute inset-x-0 top-0"
                src="/bosco/background.jpg"
                style="z-index: -10"
            />
            <div class="flex flex-col items-center z-10">
                <div class="flex flex-row items-center m-12">
                    <img class="cursor-pointer mr-20" src="/bosco/logo.jpg" style="width: 300px" />
                    <div class="cursor-pointer font-bold text-2xl mx-7" style="">Angel26</div>
                    <div class="cursor-pointer font-bold text-2xl mx-7" style="">Service</div>
                    <div class="cursor-pointer font-bold text-2xl mx-7" style="">Our Ladies</div>
                    <div class="cursor-pointer font-bold text-2xl mx-7" style="">What's On</div>
                    <div class="cursor-pointer font-bold text-2xl mx-7" style="">Contact Us</div>
                </div>
                <img
                    src="/bosco/bg-girl.png"
                    class="w-full z-10"
                    style="max-width: 1920px"
                    title="girl"
                    alt="girl"
                />
            </div>
        </div>
    </body>
</html>
