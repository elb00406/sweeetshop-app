const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const devServer = (isDev) =>
    isDev
        ? {
              devServer: {
                  open: true,
                  hot: true,
                  port: 8080,
                  static: path.join(__dirname, 'dist'),
              },
          }
        : {};

module.exports = (argv) => ({
    mode: argv.mode === 'development' ? 'development' : 'production',
    devtool: argv.mode === 'development' ? 'inline-source-map' : false,
    ...devServer((argv.mode = 'development')),
    entry: './src/script.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/, // Обработка файлов с расширением .scss
                use: [MiniCssPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
        new MiniCssPlugin({
            filename: 'styles.css', // Название выходного CSS файла
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/assets', to: 'assets' }, // Копирование содержимого папки assets
            ],
        }),
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
});
