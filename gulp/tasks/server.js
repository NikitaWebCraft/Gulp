export const server = (done) => {
	app.plugins.browserSync.init({
		server: {
			baseDir: `${app.path.build.pug}`
		},
		port: 3000
	});
};
