const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');

rules.push({
	test: /\.css$/,
	use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});
rules.push({
	test: /\.(scss|css)$/,
	use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
});
module.exports = {
	module: {
		rules,
	},
	plugins: plugins,
	resolve: {
		extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.scss'],
	},
};
