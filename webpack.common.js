const webpack = require('webpack')
const path = require('path')
const KintonePlugin = require('@kintone/webpack-plugin-kintone-plugin')
const { pluginZipFilePath } = require('./webpack-utils')

module.exports = {
  entry: {
    desktop: './src/js/desktop.js', // デスクトップ用
    config: './src/js/config.js', // プラグイン設定画面用
  }, // entry は エントリポイント、context はエントリポイントになるファイルが含まれるパス
  output: {
    path: path.resolve(__dirname, 'src', 'dist'), // src と同一階層に dist を作成してそちらを設定
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    // import なしに jQuery モジュールをロードする
    // see: https://webpack.js.org/plugins/provide-plugin/
    new webpack.ProvidePlugin({
      $: 'jquery',
    }),
    new KintonePlugin({
      manifestJSONPath: './src/manifest.json',
      privateKeyPath: './private.ppk',
      pluginZipPath: pluginZipFilePath,
    }),
  ],
  // jQuery を外部モジュールからロードする
  // see: https://webpack.js.org/configuration/externals/#externals
  externals: {
    jquery: 'jQuery',
  },
}
