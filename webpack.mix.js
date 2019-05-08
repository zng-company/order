const mix = require('laravel-mix');


mix
    .setPublicPath('./')
    .autoload({jquery: ['$', 'window.jQuery']})
    .js('node_sample/js/app.js',   'public_html/js')
    .sass('node_sample/scss/main.scss',  'public_html/css')
;
