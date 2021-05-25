const mix = require("laravel-mix");

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

mix.js("resources/js/admin/staffs/index.js", "public/js/staffs.js").react();

mix.postCss("resources/css/app.css", "public/css", [
        require("postcss-import"),
        require("tailwindcss"),
        require("autoprefixer"),
    ]);
// .sass('resources/sass/app.scss', 'public/css', [require('tailwindcss')]);

mix.browserSync({
    proxy: "http://admin.angels26.com.au:8000/",
});
