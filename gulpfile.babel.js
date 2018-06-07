/**
 * Created by Michael M. Simon on 6/7/2018.
 */

'use strict';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import runSequence from 'run-sequence';
import del from 'del';

let gulp = require('gulp');
let babel = require('gulp-babel');
let gls = require('gulp-live-server');


const $ = gulpLoadPlugins();
const reload = browserSync.reload;

let configuration = {
    paths: {
        src: {
            html: 'src/**/*.html',
            css:  './src/styles/style.css'
        },
        dist: './dist'
    }
};

gulp.task('scripts', () =>{
    return gulp.src(['src/**/*.js'])
        .pipe(babel())
        .pipe(gulp.dest('dist'))
});

gulp.task('html', ()=> {
    gulp.src(configuration.paths.src.html)
        .pipe(gulp.dest(configuration.paths.dist));
});
gulp.task('css', ()=> {
    gulp.src(configuration.paths.src.css)
        .pipe(gulp.dest(configuration.paths.dist + '/styles'))
});

gulp.task('serve', ['scripts'], () => {
    browserSync({
        notify: false,
        logPrefix: 'WSK',
        scrollElementMapping: ['main', '.mdl-layout'],
        server: ['.tmp', 'src'],
        port: 3000
    });
    gulp.watch(['src/**/*.html'], reload);
    gulp.watch(['src/styles/**/*.{scss,css}'], ['styles', reload]);
    gulp.watch(['src/scripts/**/*.js'], ['scripts', reload]);
    gulp.watch(['src/images/**/*'], reload);
});

gulp.task('serve:dist', ['default'], () =>
    browserSync({
        notify: false,
        logPrefix: 'WSK',
        scrollElementMapping: ['main', '.mdl-layout'],
        server: 'dist',
        port: 3000
    })
);

gulp.task('clean', () => del(['.tmp', 'dist/*', '!dist/.git'], {dot: true}));

gulp.task('default',['clean'], cb =>
    runSequence(
        ['html', 'css','scripts'],
        cb
    )
);