const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	entry: './src/index.ts',
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'@babel/preset-env',
								{
									targets: {
										chrome: '58',
										ie: '11',
									},
								},
							],
						]
					},
				},
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
				],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
		}),
		new webpack.BannerPlugin({
			banner: 'My App v1.0.0',
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
		}),
	],
	optimization: {
		minimizer: [
			new CssMinimizerPlugin(),
			new TerserPlugin(),
		],
		splitChunks: {
			chunks: 'all',
			name: () => Math.random().toString(36).substring(2, 15),
		},
	},
};