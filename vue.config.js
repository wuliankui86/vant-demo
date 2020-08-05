/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: wlk
 * @Date: 2020-08-05 09:47:32
 * @LastEditors: wlk
 * @LastEditTime: 2020-08-05 09:48:39
 */
const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')

module.exports = {
    css: {
        loaderOptions: {
          postcss: {
            plugins: [
              autoprefixer(),
              pxtorem({
                rootValue: 37.5,
                propList: ['*'],
                // 该项仅在使用 Circle 组件时需要
                // 原因参见 https://github.com/youzan/vant/issues/1948
                selectorBlackList: ['van-circle__layer']
              })
            ]
          }
        }
      }

}