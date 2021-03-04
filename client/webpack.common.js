const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    },
    {
      test: /(\.module)?.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
        },
      ],
    },
    {
      test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
      type: 'asset/resource',
    },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
