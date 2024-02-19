import pug from "gulp-pug";

export const pugFormatter = () => {
	return app.gulp
		.src(app.path.src.pug)
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "PUG",
					message: "Error: <%= error.message %>"
				})
			)
		)
		.pipe(pug({ pretty: app.isDev }))
		.pipe(app.gulp.dest(app.path.build.pug))
		.pipe(app.plugins.browserSync.stream());
};
