const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .js('resources/js/app.js', 'public/js')         // Main js file
    .css('resources/css/app.css', 'public/css')
    .sass('resources/sass/app.scss', 'public/css')  // Bootstrap Styles
    .css('resources/css/mockup-V0/app.css', 'public/css/mockup-V0')   // mockup-V0
    .version()
    .sourceMaps();