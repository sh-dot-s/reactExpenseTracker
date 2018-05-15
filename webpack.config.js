const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const dev_config = module.exports = (env,) => {
  const isProdMode = env === 'production';
  const extractCSS = new ExtractTextPlugin('styles.css');

  return ({
    entry: './scripts/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js?$/,
          exclude: /(node_modules|bower_components)/
        }, {
          test: /\.s?css$/,
          use: extractCSS.extract({
            fallback: "style-loader",
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              }, {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          })
        }, {
          test: /\.(jpe?g|png|gif|svg)$/,
          use: ['url-loader?limit=10000', 'img-loader']
        }
      ]
    },
    devtool: isProdMode
      ? 'source-map'
      : 'eval',
    plugins: [extractCSS],
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/public/'
    }
  });
};
