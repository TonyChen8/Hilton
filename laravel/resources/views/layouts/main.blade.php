@php
$items=[
['label'=>"Angel26", 'route' => 'home'],
['label'=>"Service", 'route' => 'service'],
['label'=>"Our Ladies", 'route' => 'ladies'],
['label'=>"Who's On", 'route' => 'whosOn'],
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
  <link href="{{ mix('css/app.css') }}" rel="stylesheet" />
  {{ $reactjs }}
</head>

<body class="font-sans antialiased" style="background-color: rgba(0,0,0,0.85)">
  <div class="relative" style="color: rgb(255, 199, 1)">
    <!-- <img class="absolute inset-x-0 top-0" src="/bosco/background.jpg" style="z-index: -10" /> -->
    <div class="flex flex-col items-center z-10">
      <div class="flex flex-row items-center mt-12" style="width: 1200px">
        <img class="cursor-pointer mr-10" src="/bosco/logo.jpg" style="width: 300px" />
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

      <div style="min-height: 50vh">{{ $slot }}</div>

      <div class="w-1/2 text-2xl mt-10">
        <table width="100%">
          <thead>
            <tr>
              <td class="border border-yellow-500 text-center"><a href={{route('service')}}>service</a></td>
              <td class="border border-yellow-500 text-center"><a href={{route('ladies')}}>our ladies</a></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-yellow-500 text-center"><a href={{route('whosOn')}}>who’s on</a></td>
              <td class="border border-yellow-500 text-center"><a href={{route('contactUs')}}>contact us</a></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mt-20 p-5 w-full" style="background-color: #000">
        <span class="font-bold text-lg text-left">Copyright 2021 Angel26, all rights reserved.</span>
      </div>
    </div>
  </div>
</body>

</html>
