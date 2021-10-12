const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require("path");
module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "main.[contenthash].js",
		path: path.resolve(__dirname, "dist"),
	},
	mode: "development",
	devtool: false,
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/public/index.html",
		}),
	],
};
