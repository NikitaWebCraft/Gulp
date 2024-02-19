import plumber from "gulp-plumber";
import notify from "gulp-notify";
import browserSync from "browser-sync";
import sourceMap from "gulp-sourcemaps";
import newer from "gulp-newer";
import gulpIf from "gulp-if";

export const plugins = {
	plumber: plumber,
	notify: notify,
	browserSync: browserSync,
	sourceMap: sourceMap,
	newer: newer,
	if: gulpIf
};
