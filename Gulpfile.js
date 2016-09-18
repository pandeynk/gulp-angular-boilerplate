var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    jshint = require('gulp-jshint'),
    minify = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    autopreFixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    copy = require('gulp-copy'),
    flatten = require('gulp-flatten'),
    gulpNgConfig = require('gulp-ng-config');

gulp.task('config', function () {
  gulp.src('./config.json')
  .pipe(gulpNgConfig('cadiq.constants'))
  .pipe(rename('app.constants.js'))
  .pipe(gulp.dest('./client'))
});

gulp.task('vendor-css', function(){
    gulp.src([
            './build/bootstrap.flaty.min.css',
            './bower_components/bootstrap-social/bootstrap-social.css',
            './bower_components/font-awesome/css/font-awesome.css',
            //'./bower_components/datatables/media/css/dataTables.bootstrap.css',
            //'./bower_components/datatables-responsive/css/dataTables.responsive.css',
            './bower_components/metisMenu/dist/metisMenu.css',
            './build/style.css'
        ])
        .pipe(concat('vendor.css'))
        .pipe(minify())
        .pipe(rename('vendor.min.css'))
        .pipe(gulp.dest('./build'))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('vendor-js', function(){
    gulp.src([
            './bower_components/jquery/dist/jquery.min.js',
            './bower_components/bootstrap/dist/js/bootstrap.min.js',
            //'./bower_components/datatables/media/js/dataTables.bootstrap.js',
            //'./bower_components/datatables-responsive/js/dataTables.responsive.js',
            './bower_components/metisMenu/dist/metisMenu.js',
            './bower_components/flot/jquery.flot.js',
            './bower_components/flot.tooltip/js/jquery.flot.tooltip.js',
            './bower_components/eve/eve.js',
            './bower_components/holderjs/holder.js',
            './bower_components/rapheal/raphael.js',
            './build/script.js'
        ])
        .pipe(concat('vendor.js'))
        .pipe(uglify())
        .pipe(rename('vendor.min.js'))
        .pipe(gulp.dest('./build'))
        .pipe(gulp.dest('./public/javascript'));
});

gulp.task('vendor-images', function(){
    gulp.src([
        './bower_components/datatables/**/images/*.{png,gif,jpg}'
        ])
    .pipe(flatten())
    .pipe(gulp.dest('./public/images'));
});

gulp.task('vendor-fonts', function(){
    gulp.src([
        './bower_components/**/fonts/*.{eot,svg,ttf,woff,woff2}'
        ])
    .pipe(flatten())
    .pipe(gulp.dest('./public/fonts'));
});

gulp.task('bower', ['vendor-css', 'vendor-js', 'vendor-images', 'vendor-fonts'], function(){});

gulp.task('jshint', function() {
    return gulp.src("./client/**/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('browserify-client', ['jshint'], function() {
    return gulp.src("./client/app.js")
        .pipe(browserify({
            insertGlobals: true
        }))
        .pipe(rename('app.build.js'))
        .pipe(gulp.dest('./build'))
        .pipe(gulp.dest('./public/javascript'));
});

gulp.task('css', function() {
    gulp.src(['./node_modules/angular-ui-bootstrap/dist/ui-bootstrap-csp.css', './css/**/*.css'])
        .pipe(concat('app.css'))
        .pipe(gulp.dest('./build'))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('html', function() {
    gulp.src(['./client/components/**/*.html', './client/directives/**/*.html'])
        .pipe(gulp.dest('./public/templates'));
});

gulp.task('watch', function() {
    gulp.watch('./client/**/*.js', ['browserify-client']);
    gulp.watch('./client/components/**/*.html', ['html']);
});

gulp.task('build', ['config', 'browserify-client','bower', 'css', 'html']);

gulp.task('default', ['build', 'watch']);
