const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
var webpack = require("webpack");



module.exports = {


    entry: './src/index.js',

    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'build'),
        filename: 'main.js'
    },


    module: {
        rules: [

            {
              test: /\.html$/i,
              loader: 'html-loader',
            },

            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    {
                      loader: "postcss-loader",
                      options: {
                          postcssOptions: {
                              plugins: [
                                  [
                                  "postcss-preset-env",
                                  ],
                              ],
                          },
                      },
                  },
                    // Compiles Sass to CSS
                    "sass-loader",
                    
                ],
            },

            {
              test: /\.(png|svg|jpg|jpeg|gif)$/i,
              type: 'asset/resource',
            },

            {
              test: /\.(woff|woff2|eot|ttf|otf)$/i,
              type: 'asset/resource',
            },
            

            {
                test: require.resolve("jquery"),
                loader: "expose-loader",
                options: {
                  exposes: ["$", "jQuery"],
                },
            },

            


        ]
    },


    devServer: {

        static: {
    
          directory: path.join(__dirname, ' build'),
    
        },
    
        compress: true,
    
        port: 9000,
    
       open: true,
    
        devMiddleware: {
    
          writeToDisk: true,
    
        },

        hot: false, 
  
        liveReload: true,
    
        open: true,
    
    },


    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),

        new HtmlWebpackPlugin({
          template: './src/turkey.html',
          filename: 'turkey.html',
        }),

        new HtmlWebpackPlugin({
          template: './src/egypt.html',
          filename: 'egypt.html',
        }),

        new HtmlWebpackPlugin({
          template: './src/sign-in.html',
          filename: 'sign-in.html',
        }),

        new HtmlWebpackPlugin({
          template: './src/log-in.html',
          filename: 'log-in.html',
        }),

        new MiniCssExtractPlugin(),

        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
        }),


    ]
    


}