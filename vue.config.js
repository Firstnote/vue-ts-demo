module.exports = {
  publicPath: "./",
  outputDir: "dist",
  filenameHashing: false,
  productionSourceMap: false,
  configureWebpack:{
    performance: {
      hints: false
    }
  },
  pages: {
    index: {
      entry: "example/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "fn-ts-demo"
    }
  }
}