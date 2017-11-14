let mix = require('laravel-mix');

mix.js('src/js/app.js', 'dist/js/');

mix.webpackConfig({
    target: "node",
    module: { rules: [ { test: /rx\.lite\.aggregates\.js/, use: 'imports-loader?define=>false' } ] }
});