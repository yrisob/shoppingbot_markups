const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
const sass = require('gulp-dart-sass');
const srcmaps = require('gulp-sourcemaps');
const gulpif = require('gulp-if');
const rename = require("gulp-rename");

function buildStyles(dev = false){
	const isProd = (dev) ? false : true;
	return gulp.src(`${config.paths.src.scss}`)
		.pipe(gulpif(dev, srcmaps.init()))
		.pipe(sass({
			// outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(cleancss({
			// inline: ['all'],
			inline: ['local'],
			level: { 1: { specialComments: 0 } },
			format: 'beautify'
		}))
		.pipe(gulpif(dev, srcmaps.write()))
		.pipe(gulpif(isProd, rename({
			suffix: '.min'
		})))
		.pipe(gulp.dest(`${config.paths.build.css}`));
}

gulp.task('scss', () => buildStyles());
gulp.task('scss:dev', () => buildStyles(true));
