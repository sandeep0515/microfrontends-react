const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const dependencies = require("./package.json").dependencies;

module.exports = {
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "main.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
        }),
        new CopyWebpackPlugin({
            patterns :[
            { 
                from: path.resolve(__dirname, '', 'assets'), 
                to: path.resolve(__dirname, 'dist', 'assets') 
            }
        ]}),
        new ModuleFederationPlugin({
            name: "shop-container",
            remotes: {
              product: "product@http://localhost:4500/remoteEntry.js"
            },
            exposes: {},
            shared: {
              ...dependencies,
              react: {
                singleton: true,
                requiredVersion: dependencies.react,
              },
              "react-dom": {
                singleton: true,
                requiredVersion: dependencies["react-dom"],
              },
            },
          })
    ],
    devServer: {
        port: 4200,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: "url-loader",
                options: { limit: false },
            },
        ],
    }
};