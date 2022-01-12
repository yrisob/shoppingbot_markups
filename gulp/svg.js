const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const pug = require("gulp-pug");
const notify = require("gulp-notify");

gulp.task('sprite', () => {
	return gulp.src(`${config.paths.src.icons}`)
		.pipe(svgSprite({
			mode: {
				stack: {
					sprite: "../icons.svg"
				}
			}
		}))
		.pipe(gulp.dest(`${config.paths.build.icons}`));
});
