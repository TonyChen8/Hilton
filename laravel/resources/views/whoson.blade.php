<x-main-layout>
  <x-slot name="reactjs">
    <script src="{{ mix('js/whoson.js') }}?ver={{(new DateTime())->getTimestamp()}}" defer></script>
  </x-slot>
</x-main-layout>
