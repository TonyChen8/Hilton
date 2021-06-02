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
mix.js("resources/js/admin/schedule/index.js", "public/js/schedule.js").react();

mix.js("resources/js/www/home/index.js", "public/js/home.js").react();
mix.js("resources/js/www/service/index.js", "public/js/service.js").react();
mix.js("resources/js/www/ladies/index.js", "public/js/ladies.js").react();
mix.js("resources/js/www/whoson/index.js", "public/js/whoson.js").react();
mix.js("resources/js/www/contactus/index.js", "public/js/contactus.js").react();
mix.js("resources/js/common/menu.js", "public/js/menu.js").react();

// mix.postCss("resources/css/app.css", "public/css", [
//         require("postcss-import"),
//         require("tailwindcss"),
//         require("autoprefixer"),
//     ]);

mix.postCss("resources/css/app.css", "public/css", [require("tailwindcss")]);

mix.browserSync({
  open: 'external',
  host: 'localhost',
  proxy: "http://test.angels26.com.au:8000/",
  // proxy: "http://admin.angels26.com.au:8000/",
});
