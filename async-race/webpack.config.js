const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const environment = process.env.NODE_ENV || 'development';
const isDevelopmentEnvironment = environment === 'development';
const sourceMapType = isDevelopmentEnvironment ? 'source-map' : undefined;

module.exports = {
    mode: environment,
    devtool: sourceMapType,
    devServer: {
        open: true,
        hot: true,
    },
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: 'index.js',
        assetModuleFilename: 'assets',
    },
    resolve: {
        extensions: ['.js', '.ts'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
        }),
        new MiniCssExtractPlugin({ filename: 'styles.css' }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ogg|mp3|wav)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name][ext]',
                },
            },
            {
                test: /\.ts$/i,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
};
