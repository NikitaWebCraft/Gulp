import ttfWoff from "gulp-ttf2woff";
import ttfWoff2 from "gulp-ttf2woff2";

export const convertTtfWoff = () => {
	return app.gulp
		.src(app.path.src.fonts)
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "FONTS",
					message: "<%= error.message %>"
				})
			)
		)
		.pipe(ttfWoff())
		.pipe(app.gulp.dest(app.path.build.fonts));
};

export const converTtfWoff2 = () => {
	return app.gulp
		.src(app.path.src.fonts)
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "FONTS",
					message: "<%= error.message %>"
				})
			)
		)
		.pipe(ttfWoff2())
		.pipe(app.gulp.dest(app.path.build.fonts));
};
