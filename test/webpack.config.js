const webpack = require('webpack');
const path = require('path');

/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: './index.js',

	output: {
		filename: '[name].bundle.js',
		path: path.join(__dirname, 'dist')
	},

	module: {
		rules: [{
   //test: /\.(graphql|gql)$/,
  //          exclude: /node_modules/,
 //           loader: 'graphql-tag/loader'
//}, {
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',

				options: {
					presets: ['es2015']
				}
			}
		]
	},

	plugins: [new UglifyJSPlugin()]
};
