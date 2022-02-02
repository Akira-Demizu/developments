<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel</title>
    @if(config('app.env') === 'production')
        <link href="{{ asset('css/app.min.css') }}" rel="stylesheet"/>
        <script src="{{ asset('js/app.min.js') }}" defer="defer"></script>
    @else
        <link href="{{ asset('css/app.css') }}" rel="stylesheet"/>
        <script src="{{ asset('js/app.js') }}" defer="defer"></script>
    @endif
</head>
<body>
<div id="app">
    <test-vue></test-vue>
</div>
</body>
</html>
