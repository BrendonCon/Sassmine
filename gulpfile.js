
var gulp = require('gulp'), 
  loadPlugins = require('gulp-load-plugins'),
  plugins = loadPlugins(),
  bemForceFiles = [
    './scss/sassmine/_config.scss',
    './scss/sassmine/_function.scss',
    './scss/sassmine/_mixin.scss'
  ];
    
gulp.task('sass', function () {
  return gulp.src('./scss/*.scss')
    .pipe(plugins.sass({
      outputStyle: 'compact'
    }).on('error', plugins.sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('concat', function() {
  return gulp.src(bemForceFiles)
    .pipe(plugins.concat('_sassmine.scss'))
    .pipe(gulp.dest('./build/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./scss/*.scss', ['sass']);
});