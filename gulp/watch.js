const gulp = require("gulp");

gulp.task('watch', () => {
	gulp.watch("./src/**/*.scss", gulp.series('scss:dev'));
	gulp.watch("./src/**/*.pug", gulp.series('pug'));
});
