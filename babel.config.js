/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: wlk
 * @Date: 2020-08-05 09:42:11
 * @LastEditors: wlk
 * @LastEditTime: 2020-08-05 09:45:13
 */
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
};
