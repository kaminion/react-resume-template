const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const fs = require('fs');
const YAML = require('yaml');

const file = fs.readFileSync('./config.yml', 'utf-8');
const config = YAML.parse(file);

console.log(config.title);

module.exports = {
    entry: "./index.tsx",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "/dist"),
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.tsx?$/,
                exclude: path.resolve(__dirname, "/node_modules/"),
                use:["ts-loader"]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: "file-loader",
            },
            {
                test: /\.(ttf|eot|svg)$/,
                use: "file-loader",
            },
            {
                test: /\.ya?ml$/,
                type: 'json',
                use:"yaml-loader"
            }
        ]  
    },
    resolve: {
        alias: {
            react: path.resolve('./node_modules/react'),
            "react-dom": path.resolve('./node_modules/react-dom'),
            assets: path.resolve('./public/assets'),
            icons: path.resolve('./public/assets/icons'),
            images: path.resolve('./public/assets/images'),
            data: path.resolve('./data')
        },
        extensions:[".tsx", ".ts", ".js", ".jsx"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            title: config.title
        }),
        new ReactRefreshPlugin()
    ],
    target: "web",
    devServer: {
        static: {directory: path.resolve(__dirname, "dist")},
        hot: true,
        host: "localhost",
        port: "3000",
        open: true
    }
}