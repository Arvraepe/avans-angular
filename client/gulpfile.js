/**
 * Created by arne on 30/12/15.
 */

var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var replace = require('gulp-replace');

gulp.task('styles', function () {

    // External CSS files
    gulp.src([
        './node_modules/angular-ui-bootstrap/ui-bootstrap-csp.css',
        './node_modules/bootstrap/dist/css/bootstrap.min.css',
        './node_modules/font-awesome/css/font-awesome.min.css'
    ]).pipe(concat('app-concat-external.css'))
        .pipe(gulp.dest('./build/styles/'));

    gulp.src([
        './node_modules/font-awesome/fonts/fontawesome-webfont.woff2',
        './node_modules/font-awesome/fonts/fontawesome-webfont.woff',
        './node_modules/font-awesome/fonts/fontawesome-webfont.ttf',
        './node_modules/font-awesome/fonts/fontawesome-webfont.svg',
        './node_modules/font-awesome/fonts/fontawesome-webfont.eot'
    ]).pipe(gulp.dest('./build/fonts/'));

    // Internal SCSS files
    gulp.src('./app/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('app-concat.css'))
        .pipe(gulp.dest('./build/styles/'))
        .pipe(connect.reload());

});

gulp.task('scripts', function () {

    // External JS files
    gulp.src([
        './node_modules/angular/angular.js',
        './node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js',
        './node_modules/angular-ui-router/release/angular-ui-router.js',
    ]).pipe(concat('app-concat-external.js'))
        .pipe(gulp.dest('./build/scripts/'));

    // Internal JS files
    gulp.src('./app/**/*.js')
        .pipe(concat('app-concat.js'))
        .pipe(gulp.dest('./build/scripts/'))
        .pipe(connect.reload());

});

gulp.task('templates', function () {
    gulp.src('./app/**/*.html')
        .pipe(gulp.dest('./build/templates/'))
        .pipe(connect.reload());
});

gulp.task('resources', function () {
    gulp.src(['./app/resources/**/*'])
        .pipe(gulp.dest('./build/resources/'))
        .pipe(connect.reload());
});

gulp.task('webserver', function () {
    connect.server({
        port: 9091,
        livereload: true
    });
});


gulp.task('watch', function () {
    gulp.watch('./app/**/*.scss', ['styles']);
    gulp.watch('./app/**/*.js', ['scripts']);
    gulp.watch('./app/**/*.html', ['templates']);
    gulp.watch('./app/resources/**/*.json', ['resources']);
});

gulp.task('run', ['styles', 'scripts', 'templates', 'resources', 'webserver', 'watch']);