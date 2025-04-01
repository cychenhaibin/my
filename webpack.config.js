const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js', // 入口文件
    output: {
        path: path.resolve(__dirname, 'dist'), // 输出目录
        filename: 'index.js', // 输出文件名
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader', // 使用 html-loader 处理 HTML 文件
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], // 处理 CSS 文件
            },
            {
                test: /\.(png|jpg|jepj|gif|woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]', // 将图片输出到dist/images目录
                },
            },
        ],
    },
    plugins: [
        // 为每个 HTML 模板文件配置一个 HtmlWebpackPlugin 实例
        new HtmlWebpackPlugin({
            template: './index.html', // 模板文件路径
            filename: 'index.html', // 输出文件名
        }),
        new HtmlWebpackPlugin({
            template: './pages/cqupt-studio.html', // 模板文件路径
            filename: './pages/cqupt-studio.html', // 输出文件名
        }),
        new HtmlWebpackPlugin({
            template: './pages/lanshan-studio.html', // 模板文件路径
            filename: './pages/lanshan-studio.html', // 输出文件名
        }),
        new HtmlWebpackPlugin({
            template: './pages/shopee-internShip.html', // 模板文件路径
            filename: './pages/shopee-internShip.html', // 输出文件名
        }),
        new HtmlWebpackPlugin({
            template: './pages/zht-internShip.html', // 模板文件路径
            filename: './pages/zht-internShip.html', // 输出文件名
        }),
    ],
};