@php
$items=[
['label'=>"Angels 26", 'route' => 'home'],
['label'=>"Rate", 'route' => 'service'],
['label'=>"Our Ladies", 'route' => 'ladies'],
['label'=>"Who's On", 'route' => 'whoson'],
['label'=>"Contact Us", 'route' => 'contactus'],
];
@endphp
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Angels 26</title>
  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Satisfy:wght@400;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link href="{{ mix('css/app.css') }}" rel="stylesheet" />
</head>

<body class="font-sans antialiased" style="background-color: rgba(0,0,0,1)">
  <div class="relative text-yellow">
    <!-- <img class="absolute inset-x-0 top-0" src="/bosco/background.jpg" style="z-index: -10" /> -->
    <div class="flex flex-col items-center z-10">
      <div class="flex-row items-center mt-12 sm:flex hidden" style="width: 1200px">
        <img class="cursor-pointer mr-10" src="/bosco/logo.jpg" style="width: 300px" />
        @foreach ($items as $item)
        <div class="flex flex-row items-center cursor-pointer mx-7">
          @if (request()->routeIs($item['route']))
          <img src='/bosco/navcurbgl.png' style="width: 40px; margin-right: 5px;" />
          @endif
          <a class="font-bold text-2xl" href={{route($item['route'])}} style="padding: 20px 0;">
            {{$item['label']}}
          </a>
          @if (request()->routeIs($item['route']))
          <img src='/bosco/navcurbgr.png' style="width: 40px" />
          @endif
        </div>
        @endforeach
      </div>
      <div id="menu" class="w-full sm:hidden"></div>
      <div id="reactjs" class="w-full" style="min-height: 50vh"></div>
      <div class="w-4/5 sm:w-1/2 text-2xl mt-10">
        <table width="100%">
          <thead>
            <tr>
              <td class="border border-yellow-500 text-center"><a href={{route('service')}}>rate</a></td>
              <td class="border border-yellow-500 text-center"><a href={{route('ladies')}}>our ladies</a></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-yellow-500 text-center"><a href={{route('whoson')}}>who’s on</a></td>
              <td class="border border-yellow-500 text-center"><a href={{route('contactus')}}>contact us</a></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mt-20 p-5 w-full bg-gray-900">
        <span class="font-bold text-sm text-left sm:text-lg">Copyright 2021 Angels 26, all rights reserved.</span>
      </div>
    </div>
  </div>
  <script src="{{ mix('js/menu.js') }}" defer></script>
  {{ $reactjs ?? "" }}
</body>

</html>
