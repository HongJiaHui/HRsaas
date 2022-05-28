<template>
  <div>
    <svg-icon icon-class="fullscreen" style="color:#fff; width: 20px; height: 20px" @click="changeScreen" />
  </div>
</template>

<script>
import ScreenFull from 'screenfull'
export default {
  methods: {
    // 改变全屏
    changeScreen() {
      // 原生方式
      // document.documentElement.requestFullscreen()
      if (!ScreenFull.isEnabled) {
        this.$message.warning('当前全屏功能不可用！')
        return
      }
      // 方法 直接全屏 可以全屏也可以退出全屏
      ScreenFull.toggle()
    }
  }
}
</script>

<style>

</style>
