'use strict';

const gulp = require('gulp');
const requireDir = require('require-dir');

global.config = require('./project.paths.json');

requireDir('./gulp');

gulp.task('default', gulp.series('pug','scss'));
gulp.task('dev', gulp.series('pug', 'scss:dev', gulp.parallel('watch') ));
