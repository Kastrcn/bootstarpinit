
var gulp = require('gulp'),
    borwserSync = require('browser-sync').create(),
    reload = borwserSync.reload,
    watch = require('gulp-watch'),
    sass = require('gulp-sass');

    
gulp.task('browser-sync',function(){
    borwserSync.init({
        server:{
        baseDir:'./'
        }
    });

    gulp.watch('src/scss/**/*.scss',['sassfile']);
    gulp.watch("*.html").on('change',reload);
});

gulp.task('sassfile',function(){
    return gulp.src('./src/scss/**/build.scss')
    .pipe( sass().on('error', sass.logError)).pipe( gulp.dest( './dist/css' ) );
});

