const config = {
    mode: "development",
    devtool: "source-map",

    enter: {
        main: './src'
    },
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'label-loader',

            }
        ]
    }
}
module.exports = config