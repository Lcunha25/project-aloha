// REQUIRES

var gulp = require('gulp');
var browserSync = require('browser-sync');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var configFile = require('gulp-eslint');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var prettyError = require('gulp-prettyerror')

// Create basic Gulp tasks
gulp.task('scripts', function() {
  return gulp.src('./src/js/*.js')
  .pipe(uglify())
  .pipe(
    rename({ 
      extname: '.min.js'
    })
  )
  .pipe(gulp.dest('./dist/js'));
});
gulp.task('lint', function() {
  return gulp
  .src(['./src/js/main.js'])
  .pipe(prettyError())
  .pipe(configFile())
  .pipe(configFile.format())
  .pipe(configFile.failAfterError());
});
gulp.task('sass', function() {
  return gulp
    .src('./src/scss/style.scss')
    .pipe(prettyError()) // ADD THIS LINE
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions']
      })
    )
    .pipe(gulp.dest('./dist/css'))
    .pipe(cssnano())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./dist/css'));
});

// Set-up BrowserSync and watch

gulp.task('js-watch', ['scripts'], function (done) {
  browserSync.reload();
  done();
});
gulp.task('sass-watch', ['sass'], function (done) {
  browserSync.reload();
  done();
});


gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: './'
      }
  });
  gulp.watch('./src/scss/*.scss', ['sass-watch']);
  gulp.watch('./src/js/*.js', ['js-watch'])
  gulp.watch('*.html')
});

gulp.task('default', ['scripts', 'lint' , 'sass', 'js-watch', 'sass-watch', 'browser-sync']);