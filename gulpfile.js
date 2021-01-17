// Gulp API
const { src, dest, watch, series, parallel }    = require('gulp');

// Gulp packages
var gulp = require('gulp');
const sourcemaps        = require('gulp-sourcemaps');
const sass              = require('gulp-sass');
const autoprefixer      = require('gulp-autoprefixer');
const csscomb           = require('gulp-csscomb');
const postcss           = require('gulp-postcss');
const csso              = require('gulp-csso');

// Browser Sync
var browserSync         = require("browser-sync").create();

// Files
const files = {
  sass_src_path: 'assets/sass/**/*.scss',
  dest_path_css: 'assets/css/',
  js_src_path: 'assets/js-dev/**/*.js',
  js_dest_path: 'assets/js/',
};

function sassDevTask() {
  return src(files.sass_src_path)
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(autoprefixer())
  .pipe(csscomb())
  .pipe(csso())
  .pipe(sourcemaps.write('.'))
  .pipe(dest(files.dest_path_css))
  .pipe(browserSync.stream())
};

function jsDevTask() {
 return src(files.js_src_path)
 .pipe(sourcemaps.init())
 .pipe(sourcemaps.write('.'))
 .pipe(dest(files.js_dest_path))
 .pipe(browserSync.stream())
};

function watchDevTask() {
  browserSync.init({
      server: "./"
  });

  watch([files.sass_src_path],
      {intervall: 750, usePolling: true},
      series(
          parallel(sassDevTask),
      )
  );

  watch([files.js_src_path],
    {intervall: 750, usePolling: true},
    series(
        parallel(jsDevTask),
    )
);


  gulp.watch('./*.html').on('change',browserSync.reload);
};

exports.default = series(
    parallel(sassDevTask, jsDevTask),
    watchDevTask,
)