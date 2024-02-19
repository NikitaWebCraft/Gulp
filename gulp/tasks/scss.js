import sass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";
import groupMediaQuire from "gulp-group-css-media-queries";
import gulpAutoprefixer from "gulp-autoprefixer";

const sassInit = gulpSass(sass);

export const scss = () => {
	return app.gulp
		.src(app.path.src.scss)
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "SCSS",
					message: "Error: <%= error.message %>"
				})
			)
		)
		.pipe(app.plugins.if(app.isDev, app.plugins.sourceMap.init()))
		.pipe(
			sassInit({
				outputStyle: "expanded"
			})
		)
		.pipe(app.plugins.if(app.isBuild, groupMediaQuire()))
		.pipe(
			app.plugins.if(
				app.isBuild,
				gulpAutoprefixer({
					grid: true,
					cascade: true,
					overrideBrowserslist: ["last 3 versions"]
				})
			)
		)
		.pipe(
			rename({
				extname: ".min.css"
			})
		)
		.pipe(app.plugins.if(app.isDev, app.plugins.sourceMap.write(".")))
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.browserSync.stream());
};
