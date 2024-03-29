const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
	.BundleAnalyzerPlugin;

module.exports = {
	configureWebpack: {
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src/'),
			},
		},
		devtool: 'source-map',
		performance: {
			hints: false,
		},
		optimization: {
			splitChunks: {
				cacheGroups: {
					commons: {
						test: /[\\/]node_modules[\\/]/,
						name: 'vendors',
						chunks: 'all',
					},
				},
			},
		},
		plugins: [
			new CleanWebpackPlugin(),
			new BundleAnalyzerPlugin({
				analyzerMode: 'static',
				openAnalyzer: false,
			}),
		],
	},
};
