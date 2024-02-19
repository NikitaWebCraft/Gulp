export const webpackConfig = {
	entry: {
		main: "./src/scripts/app.js"
	},
	output: {
		filename: "app.min.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}
			}
		]
	}
};
