import webpackStream from "webpack-stream";
import webpack from "webpack";
import { webpackConfig } from "../../webpack.config.js";

export const javascript = () => {
	return app.gulp
		.src(app.path.src.js)
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "JS",
					message: "<%= error.message %>"
				})
			)
		)
		.pipe(app.plugins.if(app.isDev, app.plugins.sourceMap.init()))
		.pipe(
			webpackStream({ mode: app.isDev ? "development" : "production", ...webpackConfig }),
			webpack
		)
		.pipe(app.plugins.if(app.isDev, app.plugins.sourceMap.write(".")))
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browserSync.stream());
};
