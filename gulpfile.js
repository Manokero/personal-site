'use strict';

var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var del = require('del');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

// Set the browser that you want to support
const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
];

// Gulp task to minify CSS files
gulp.task('stylesscss', function () {
    return gulp.src('./src/scss/style.scss')
        // Compile SASS files
        .pipe(sass({
            outputStyle: 'nested',
            precision: 10,
            includePaths: ['.'],
            onError: console.error.bind(console, 'Sass error:')
        }))
        // Auto-prefix css styles for cross browser compatibility
        .pipe(autoprefixer({ browsers: AUTOPREFIXER_BROWSERS }))
        // Minify the file
        .pipe(csso())
        // Output
        .pipe(gulp.dest('./docs/css'))
});

// Gulp task to minify CSS files
gulp.task('styles', function () {
    return gulp.src('./src/css/**/*.css')
        // Auto-prefix css styles for cross browser compatibility
        .pipe(autoprefixer({ browsers: AUTOPREFIXER_BROWSERS }))
        // Minify the file
        .pipe(csso())
        // Output
        .pipe(gulp.dest('./docs/css'))
});


// Gulp task to minify JavaScript files
gulp.task('scripts', function () {
    return gulp.src('./src/js/**/*.js')
        // Minify the file
        .pipe(uglify())
        // Output
        .pipe(gulp.dest('./docs/js'))
});

// Gulp task to minify HTML files
gulp.task('pages', function () {
    return gulp.src(['index.html'])
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('./docs'));
});

// Clean output directory
gulp.task('clean', () => del(['docs']));

var filesToMove = [
    './src/images/**/*.*',
    './src/fonts/**/*.*',
];

gulp.task('move', function () {
    // the base option sets the relative root for the set of files,
    // preserving the folder structure
    gulp.src(filesToMove, { base: 'src/' })
        .pipe(gulp.dest('docs'));
});

// Gulp task to minify all files
gulp.task('default', ['move','clean'], function () {
    runSequence(
        'stylesscss',
        'styles',
        'scripts',
        'pages'
    );
});