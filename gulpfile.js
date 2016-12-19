const gulp = require('gulp');
const browserify = require('browserify');
const browserSync = require('browser-sync').create();
const rename = require('gulp-rename');
const source = require('vinyl-source-stream');
const babelify = require('babelify');
const watch = require('gulp-watch');
var reload = browserSync.reload;

const config = {
    js: {
        source: './assets_source/js/main.js',
        dist: './assets/js',
        fileName: 'main.js',
        minifiedFileName: 'main.min.js',
        watch: './assets_source/js/**/*.js'
    },
    sync: {
        server: true
    }
};

gulp.task('browserify', function() {
    return browserify({ entries: [config.js.source] })
        .transform(babelify, { presets: ['es2015'] })
        .bundle()
        .pipe(source(config.js.fileName))
        .pipe(gulp.dest(config.js.dist))
        .pipe(browserSync.stream());
});

gulp.task('serve', ['browserify'], function() {
    browserSync.init(config.sync);

    watch(config.js.watch, function(){
        gulp.start('browserify');
    });
    watch('./*.html', function(){
        reload();
    });
});

gulp.task('default', ['serve']);

gulp.task('build', ['browserify'], function(){
    gulp.src(config.js.dist + '/' + config.js.fileName)
        .pipe(rename(config.js.minifiedFileName))
        .pipe(gulp.dest(config.js.dist));
});