var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minify = require('gulp-minify-css'),
    load_plugins = require('gulp-load-plugins'),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    util = require('gulp-util'),
    prefixer = require('autoprefixer'),
    browsersync = require('browser-sync');

gulp.task('default', function() {
    // content
});