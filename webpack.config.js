const path = require("path");
module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'public/assets'),
        clean: true,
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
                test: /\.ya?ml$/,
                use: 'yaml-loader'
            },
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".ts", ".jsx", ".tsx"],
    },
}
