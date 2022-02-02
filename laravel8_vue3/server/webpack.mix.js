const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

if (mix.inProduction()) {
    mix.js('resources/js/app.js', 'public/js/app.min.js')
        .postCss('resources/css/app.css', 'public/css/app.min.css', [
            //
        ]);
} else {
    mix.js('resources/js/app.js', 'public/js/app.js')
        .postCss('resources/css/app.css', 'public/css/app.css', [
            //
        ]).sourceMaps();
}

mix.vue();
