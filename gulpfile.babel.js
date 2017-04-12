import gulp from 'gulp';
import del from 'del';
import runSequence from 'run-sequence';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import browserSyncBuilder from 'browser-sync';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();
const browserSync = browserSyncBuilder.create();
const reload = browserSync.reload;

const configExamples = require('./webpack.config.examples.js');
const configComponent = require('./webpack.config.component.js');

gulp.task('script:examples', () => (
  gulp.src([
    './examples/main.js',
  ])
  .pipe(webpackStream(configExamples, webpack))
  .pipe(gulp.dest('./examples'))
));

gulp.task('script:component', () => (
  gulp.src([
    './src/index.js',
  ])
  .pipe(webpackStream(configComponent, webpack))
  .pipe(gulp.dest('./dist'))
));

gulp.task('style', () => (
  gulp.src([
    './examples/main.scss',
  ])
  .pipe($.sass().on('error', $.sass.logError))
  .pipe($.autoprefixer())
  .pipe(gulp.dest('./examples'))
));

gulp.task('clean', () => (
  del(['dist/*', '!dist/.git'], {
    dot: true,
  })
));

const r = (d) => {
  reload();
  d();
};

gulp.task('watch:html', r);

gulp.task('watch:style', ['style'], r);

gulp.task('watch:script:component', ['script:component'], r);

gulp.task('watch:script:examples', ['script:examples'], r);

gulp.task('serve', ['script:component', 'script:examples', 'style'], () => {
  browserSync.init({
    server: './',
  });

  gulp.watch('./index.html', ['watch:html']);
  gulp.watch('./examples/main.scss', ['watch:style']);
  gulp.watch('./src/*.js', ['watch:script:component']);
  gulp.watch(['./examples/main.js', './examples/snippets/*.js', './src/*.js'], ['watch:script:examples']);
});

gulp.task('default', ['clean'], cb => (
  runSequence(
    'style',
    'script:component',
    'script:examples',
    cb // eslint-disable-line comma-dangle
  )
));
