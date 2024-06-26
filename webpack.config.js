const HtmlWebpackPligin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
   module : {
    rules : [
        {
        test : /\.css$/,
        use: [MiniCssExtractPlugin.loader, 
            "css-loader"],
        }
    ]


   },
    plugins : [
        new HtmlWebpackPligin(),
        new MiniCssExtractPlugin()
    ]
}