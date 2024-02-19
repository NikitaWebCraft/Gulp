import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { clean } from "./gulp/tasks/clean.js";
import { plugins } from "./gulp/config/plugins.js";
import { pugFormatter } from "./gulp/tasks/pug.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { javascript } from "./gulp/tasks/javascript.js";
import { images } from "./gulp/tasks/images.js";
import { converTtfWoff2, convertTtfWoff } from "./gulp/tasks/fonts.js";

global.app = {
	isBuild: process.argv.includes("--build"),
	isDev: !process.argv.includes("--build"),
	path: path,
	gulp: gulp,
	plugins: plugins
};

const watcher = () => {
	gulp.watch(path.watch.pug, pugFormatter);
	gulp.watch(path.watch.scss, scss);
	gulp.watch(path.watch.js, javascript);
	gulp.watch(path.watch.images, images);
};

export const cleanDist = clean;

export const fonts = gulp.series(convertTtfWoff, converTtfWoff2);

export const dev = gulp.series(
	clean,
	gulp.parallel(pugFormatter, scss, javascript, images),
	gulp.parallel(watcher, server)
);

export const production = gulp.series(
	clean,
	fonts,
	gulp.parallel(pugFormatter, scss, javascript, images)
);
