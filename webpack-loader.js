const path = require('path');
const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
};
module.exports = [{
    test: /\.jsx?/,
    include: PATHS.app,
    loader: 'babel',
}, {
    test: /\.css$/,
    include: PATHS.app,
    loaders: ['style', 'css']
}, {
    test: /\.scss$/,
    include: PATHS.app,
    loaders: ['style', 'css', 'sass']
}, {
    test: /\.(jpe?g|png|gif|svg)$/i,
    loaders: ["url-loader?limit=50000&name=/static/photos/[name].[ext]"]
}, {
    test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
    loader: 'file-loader',
}];
