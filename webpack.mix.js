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
    .js('resources/js/app.js', 'public/js')             // Main js file
    .js('resources/js/auth.js', 'public/js')             // Main js file
    .js('resources/js/utils.js', 'public/js')           // Utillity js file
    .js('resources/js/menu.js', 'public/js')            // Burger Menu js file
    .js('resources/js/ticket.js', 'public/js')          // Ticket js file
    .js('resources/js/home.js', 'public/js')            // Home js file
    .js('resources/js/timetable.js', 'public/js')       // Timetable js file
    .js('resources/js/acquaintance.js', 'public/js')    // Acquaintance js file
    .js('resources/js/settings.js', 'public/js')        // Top navigation js file
    .js('resources/js/user-edit.js', 'public/js')       // User edit js file
    .js('resources/js/user-profilepicture.js', 'public/js')       // User edit js file
    .js('resources/js/feedback-create.js', 'public/js') // Feedback create js file
    .js('resources/js/feedback-index.js', 'public/js')  // Feedback index js file
    .js('resources/js/calendar.js', 'public/js')  // Calendar index js file
    // Styles
    .css('resources/css/app.css', 'public/css')
    .sass('resources/sass/app.scss', 'public/css')      // Bootstrap Styles
    .sass('resources/sass/auth.scss', 'public/css')      // Authentification Styles
    .css('resources/css/top-nav.css', 'public/css')
    .css('resources/css/defaultComponents.css', 'public/css')
    .version()
    .sourceMaps();
