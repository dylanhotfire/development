const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = env => {
  // parse environment variables
  const envKeys = env
    ? Object.keys(env).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env[next]);
        return prev;
      }, {})
    : {};

  return {
    mode: 'development',
    entry: {
      'single-spa.config': './single-spa.config.js',
      'styles': './scss/index.scss'
    },
    output: {
      publicPath: '/dist/',
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          include: [
            path.resolve(__dirname, 'scss')
          ],
          use: [
              {
                  loader: 'file-loader',
                  options: { outputPath: 'css/', name: '[name].min.css'}
              },
              'sass-loader'
          ]
        },
        {
          test: /\.(js|jsx)$/,
          use: ['babel-loader'],
        },
        { 
          test: /\.(ts|tsx)$/, 
          use: ['babel-loader', 'ts-loader'], 
        },
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader',
        },
        {
          test: /\.(jpg|png)$/,
          loader: 'file-loader',
          options: {
            name: '[path][name].[hash].[ext]',
          },
        },
      ],
    },
    resolve: {
      modules: [path.resolve(__dirname, 'node_modules')],
      extensions: ['.js', '.json', '.ts', '.tsx'],
    },
    plugins: [
      new CleanWebpackPlugin(), 
      new webpack.DefinePlugin(envKeys)
    ],
    devtool: 'source-map',
    externals: [],
    devServer: {
      historyApiFallback: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      before(app) {
        app.post('*', (req, res) => {
            res.redirect(req.originalUrl);
        });
      },
    },
  };
};
