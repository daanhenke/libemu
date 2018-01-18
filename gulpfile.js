var gulp = require('gulp');
var typescript = require('gulp-typescript');
var typedoc = require('gulp-typedoc');

gulp.task('build-libemu', function () {
    return gulp.src('src/**/*.ts')
        .pipe(typescript())
        .pipe(gulp.dest('dist'));
});

gulp.task('document-libemu', ['build-libemu'], function () {
    return gulp.src('src/**/*.ts')
        .pipe(typedoc({
            module: 'umd',
            target: 'es5',
            include: 'src',
            exclude: /(node_modules|dist|docs)/,

            out: './docs',
            json: './docs.json',

            name: 'libemu',
            version: true
        }))
});

gulp.task('default', ['build-libemu']);