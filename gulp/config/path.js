const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
	build: {
		files: `${buildFolder}/files`,
		pug: `${buildFolder}/`,
		css: `${buildFolder}/css/`,
		js: `${buildFolder}/scripts/`,
		images: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts`
	},
	src: {
		files: `${srcFolder}/files/**/*.*`,
		pug: [`${srcFolder}/views/index.pug`, `${srcFolder}/pug/pages/*.pug`],
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,webp,gif}`,
		svg: `${srcFolder}/img/**/*.svg`,
		scss: `${srcFolder}/scss/style.scss`,
		js: `${srcFolder}/scripts/app.js`,
		fonts: `${srcFolder}/fonts/**/*.ttf`
	},
	watch: {
		files: `${srcFolder}/files/**/*.*`,
		pug: `${srcFolder}/views/**/*.pug`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,webp,gif,svg}`,
		scss: [`${srcFolder}/scss/**/*.scss`, `${srcFolder}/views/**/*.scss`],
		js: [`${srcFolder}/scripts/**/*.js`, `${srcFolder}/views/**/*.js`]
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	ftp: ``
};
