import gulp from 'gulp';
import del from 'del';
import runSequence from 'run-sequence';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import browserSyncBuilder from 'browser-sync';
import gulpLoadPlugins from 'gulp-load-plugins';

const $           = gulpLoadPlugins();
const browserSync = browserSyncBuilder.create();
const reload      = browserSync.reload;

gulp.task('script:examples', _ =>
  gulp.src([
    './examples/main.js'
  ])
  .pipe(webpackStream(require('./webpack.examples.js'), webpack))
  .pipe(gulp.dest('./examples'))
);

gulp.task('script:component', _ =>
  gulp.src([
    './src/index.js'
  ])
  .pipe(webpackStream(require('./webpack.component.js'), webpack))
  .pipe(gulp.dest('./dist'))
);

gulp.task('style', _ =>
  gulp.src([
    './examples/main.scss'
  ])
  .pipe($.sass().on('error', $.sass.logError))
  .pipe($.autoprefixer())
  .pipe(gulp.dest('./examples'))
);

gulp.task('clean', _ =>
  del(['dist/*', '!dist/.git'], {
    dot: true
  })
);

const r = d => {
  reload();
  d();
};

gulp.task('watch:html', r);

gulp.task('watch:style', ['style'], r);

gulp.task('watch:script:component', ['script:component'], r);

gulp.task('watch:script:examples', ['script:examples'], r);

gulp.task('serve', ['script:component', 'script:examples', 'style'], _ => {
  browserSync.init({
    server: './'
  });

  gulp.watch('./index.html', ['watch:html']);
  gulp.watch('./examples/main.scss', ['watch:style']);
  gulp.watch('./src/*.js', ['watch:script:component']);
  gulp.watch(['./examples/main.js', './examples/snippets/*.js', './src/*.js', '!./src/tag.js'], ['watch:script:examples']);
});

gulp.task('default', ['clean'], cb =>
  runSequence(
    'style',
    'script:component',
    'script:examples',
    cb
  )
);
