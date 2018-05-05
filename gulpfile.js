'use strict';

const gulp     = require('gulp');

const babel    = require('gulp-babel');
const uglify   = require('gulp-uglify');

const scss     = require('gulp-sass');
const prefixer = require('gulp-autoprefixer');

const plumber  = require('gulp-plumber');

/**
 * Gulp JavaScript task.
 */
gulp.task('js', () => {
  gulp.src('./src/js/index.js')
    .pipe(plumber())
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./assets/js'));
});

/**
 * Gulp CSS task.
 */
gulp.task('css', () => {
  gulp.src('./src/scss/index.scss')
    .pipe(plumber())
    .pipe(scss({
      outputStyle: 'compressed'
    }))
    .pipe(prefixer({
      browsers: '>1%'
    }))
    .pipe(gulp.dest('./assets/css'));
});

/**
 * Gulp watch task.
 */
let i = 0;
gulp.task('watch', () => {
  gulp.watch('./src/js/*.js', ['js']);
  gulp.watch('./src/js/**/*.js', ['js']);
  gulp.watch('./src/scss/*.scss', ['css']);
  gulp.watch('./src/scss/**/*.scss', ['css']);

  i++;
  console.log('[WATCH STATUS] Runnig...', i);
});

/**
 * Gulp build task.
 */
gulp.task('build', ['js', 'css']);

/**
 * Gulp dev task.
 */
gulp.task('dev', ['build', 'watch']);

/**
 * Gulp default task.
 */
gulp.task('default', ['build']);
