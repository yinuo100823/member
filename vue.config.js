module.exports = {
  devServer: {
    port: 8888,
    host: "localhost",
    https: false,
    open: true,
    proxy:{
      'dev-api':{
        //目标服务器地址，代理访问http://localhost:8888
        target:"http://mengxuegu.com:7300/mock/5f6d51558d90085e5b584c9e",
        changeOrigin:true,//开启代理服务器
        pathRewrite:{
          //将请求地址前缀‘dev-api’替换成‘ ’
          '^dev-api':""
        }
      }
    }
  },
  lintOnSave: false, //关闭格式检查
  productionSourceMap: false //打包时不会生成.map文件，加速打包
};
