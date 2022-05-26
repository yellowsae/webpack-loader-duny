// my-loader
const loaderUtils = require('loader-utils')

module.exports = function (source) {
  // 开启缓存
  this.cacheable && this.cacheable();

  // 关闭缓存
  // this.cacheable(false);
  // 获取到用户给当前 Loader 传入的 options
  const options = loaderUtils.getOptions(this)
  console.log('options-->', options)
  return source.replace('world', ', I am Yellowsea')
}
