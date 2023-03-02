import pkg from 'gulp';
const { task, src, dest, watch, parallel } = pkg;
import { init, stream, reload } from 'browser-sync';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass( dartSass );
import rename from 'gulp-rename';
import autoprefixer from 'gulp-autoprefixer';
import GulpCleanCss from 'gulp-clean-css';

// Static server
task('server', function() {
    init({
        server: {
            baseDir: "src"
        },
        browser: 'chrome',
    });
});

task('styles', function() {
    return src("src/sass/**/*.+(scss|sass)")
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(rename({
                prefix: "",
                suffix: ".min",
              }))
            .pipe(autoprefixer())
            .pipe(GulpCleanCss({compatibility: 'ie8'}))
            .pipe(dest("src/css"))
            .pipe(stream());
});

task('watch', function() {
    watch("src/sass/**/*.+(scss|sass)", parallel('styles'));
    watch("src/*.html").on("change", reload);
    watch("src/js/script.js").on("change", reload);
});

task('default', parallel('watch','server','styles'));