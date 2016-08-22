var gulp=require('gulp'),
	browserify=require('gulp-browserify'),
	jshint=require('gulp-jshint'),
	minify=require('gulp-minify-css'),
	uglify=require('gulp-uglify'),
	rename=require('gulp-rename'),
	autopreFixer=require('gulp-autoprefixer'),
    concat=require('gulp-concat'),
	sass=require('gulp-sass');

gulp.task('jshint', function(){
    return gulp.src("./client/**/*.js")
            .pipe(jshint())
            .pipe(jshint.reporter('default'));
});

gulp.task('browserify-client', ['jshint'], function(){
    return gulp.src("./client/app.js")
            .pipe(browserify({
                insertGlobals:true
            }))
            .pipe(rename('app.build.js'))
            .pipe(gulp.dest('./build'))
            .pipe(gulp.dest('./public/javascript'));
});

gulp.task('css', function(){
    gulp.src(['./node_modules/angular-ui-bootstrap/dist/ui-bootstrap-csp.css', './css/**/*.css'])
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./build'))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('html', function(){
    gulp.src(['./client/components/**/*.html'])
        .pipe(gulp.dest('./public/templates'));
});

gulp.task('watch', function() {
  gulp.watch('./client/**/*.js', ['browserify-client']);
  gulp.watch('./client/components/**/*.html', ['html']);
});

gulp.task('build', ['browserify-client', 'css', 'html']);

gulp.task('default', ['build', 'watch']);



