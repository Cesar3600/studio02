const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			components: path.resolve(__dirname, 'src/components'),
			container: path.resolve(__dirname, 'src/container')
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: { loader: 'babel-loader' }
			},
			{
				test: /\.html$/,
				use: 'html-loader'
			},
			{
				test: /\.(s*)css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
					'style-loader'
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: 'index.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'assets/[name].css'
		})
	],
	devServer: {
		static: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000,
		historyApiFallback: true,
		open: true
	}
}
