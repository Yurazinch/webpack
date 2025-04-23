const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]        
    },
    plugins: [
        new HtmlWebpackPlugin({
            timeplate: './src/index.html',
        }),   
        new MiniCSSExtractPlugin()
    ]
}