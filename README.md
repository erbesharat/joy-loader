# joy-loader
A webpack loader for [Joy](https://github.com/matthewmueller/joy)

## Usage
1. You should first install [Go](https://golang.org/doc/install)
2. Then install [Joy](https://github.com/matthewmueller/joy#getting-started)
3. And install joy-loader with npm
```shell
npm install --save-dev webpack-joy-loader
```
4. Then use it in your webpack.config.js
```javascript
module.exports = {
  module: {
    rules: [{
      test: /\.go$/,
      use: {
        loader: "webpack-joy-loader",
        options: {}
      }
    }]
  }
}
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## License
[GPLv3](https://www.gnu.org/licenses/gpl-3.0.txt) 
