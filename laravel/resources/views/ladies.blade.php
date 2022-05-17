<x-main-layout>
  <x-slot name="reactjs">
    <script src="{{ mix('js/ladies.js') }}?ver={{(new DateTime())->getTimestamp()}}" defer></script>
  </x-slot>
</x-main-layout>
