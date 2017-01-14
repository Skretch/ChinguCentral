let gulp = require('gulp')
let pug = require('gulp-pug')
let sass = require('gulp-sass')
let uglify = require('gulp-uglify')
let plumber = require('gulp-plumber')
let browserSync = require('browser-sync')
let reload = browserSync.reload


//SCRIPTS task
gulp.task('scripts', function(){
  gulp.src('dev/js/**/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('public/js'))
    .pipe(reload({stream:true}))
})

//STYLES task
gulp.task('styles', function(){
  gulp.src('dev/sass/main.sass')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('public/css'))
    .pipe(reload({stream:true}))
})

//HTML task
gulp.task('html', function(){
  gulp.src(['dev/pug/homeView.pug','dev/pug/loginView.pug'])
    .pipe(plumber())
    .pipe(pug())
    .pipe(gulp.dest('public'))
    .pipe(reload({stream:true}))
  gulp.src('dev/pug/**/*.pug')
    .pipe(plumber())
    .pipe(gulp.dest('server/views'))
    .pipe(reload({stream:true}))
})

//BROWSER syncronization
gulp.task('browser-sync', function(){
  browserSync({
    server:{
      baseDir:'./public/'
    }
  })
})

//WATCH tasks
gulp.task('watch', function(){
  gulp.watch('dev/js/**/*.js', ['scripts'])
  gulp.watch('dev/sass/**/*.sass',['styles'])
  gulp.watch('dev/pug/**/*.pug',['html'])
})

//DEFAULT task

gulp.task('default', [
  'scripts',
  'styles',
  'html',
  'browser-sync',
  'watch'
])
