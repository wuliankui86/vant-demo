<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: wlk
 * @Date: 2020-08-05 09:42:11
 * @LastEditors: wlk
 * @LastEditTime: 2020-08-05 10:37:58
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <button @click="show=true">测试日历组件（测试机型iPhone6S Plus）</button>
    <p>
      存在的问题
      <br>
      1.2020-08-03 #6926已修复iPhone6S Plus 上组件显示空白的bug
      <br>
      2.在滑动日历时，仍然存在 滚动区域 跳动的bug，并且无法滑动至底部
      <br>
      3.ipad的大屏设备上，组件初始化时仍然显示为空白。
    </p>
    <van-calendar  :min-date="minDate" :max-date="maxDate" type="range" v-model="show" @confirm="show=false" />
  </div>
</template>

<script>
import { Calendar } from 'vant';
export default {
  name: "App",
  components:{
    [Calendar.name]:Calendar
  },
   data() {
    return {
      show: false,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2020,6, 6)
    };
  },
  method:{

  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: start;
  color: #2c3e50;
  margin-top: 60px;
}
p {
  font-size: 12px;
  line-height: 18px;
}
</style>
