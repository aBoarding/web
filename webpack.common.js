const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	entry: ['./src/routes.js'],
	resolve: {
		modules: [
			'node_modules',
			path.resolve(__dirname, 'assets'),
			path.resolve(__dirname, 'src/pages'),
			path.resolve(__dirname, 'src/components'),
			path.resolve(__dirname, 'src/metadata'),
			path.resolve(__dirname, 'src/services'),
			path.resolve(__dirname, 'src/helpers'),
			path.resolve(__dirname, 'src/stores'),
			path.resolve(__dirname, 'src/style')
		],
		extensions: ['.js', '.css', '.json']
	},
	output: { 
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				options: {
					presets: ['env', 'stage-0', 'react']
				},
				exclude: path.resolve(__dirname, 'node_modules')
			},
			{ 
				test: /\.(ttf|eot)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '/fonts/[name].[ext]'
						}
					}
				]
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('styles.css')
	],
	devServer: {
		contentBase: path.join(__dirname, "public"),
		historyApiFallback: true,
		watchOptions: {
			poll: true
		},
		stats: 'errors-only'
	}
}