const gulp = require('gulp');
const pug = require('gulp-pug');
const notify = require('gulp-notify');

gulp.task('pug', () => {
	return gulp.src(`${config.paths.src.pug}`)
		.pipe(pug({
			// pretty: true
			pretty: '\t'
		}))
		.on('error', notify.onError({
			title: "Error in pug",
			message: "Error: <%= error.message %>",
		}))
		.pipe(gulp.dest(`${config.paths.build.html}`));
});
