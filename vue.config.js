module.exports = {
  publicPath: "./",
  outputDir: "zl-ui",
  filenameHashing: false,
  productionSourceMap: false,
  configureWebpack:{
    performance: {
      hints: false
    },
    // mode:'development'
  },
  pages: {
    index: {
      entry: "example/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "fn-ts-demo"
    },
    main: {
      entry: "document/main.js",
      template: "document/index.html",
      filename: "main.html",
      title: "document"
    }
  }
}