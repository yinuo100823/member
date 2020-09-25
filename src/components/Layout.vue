<template>
  <div>
    <app-header></app-header>
    <app-navbar></app-navbar>
    <app-main></app-main>


  </div>
</template>

<script>
import AppHeader from './AppHeader'
import AppMain from './AppMain'
import AppNavbar from './AppNavbar'

export default {
  name: "Layout",
  components: {
    AppHeader, AppMain, AppNavbar
  }
}
</script>

<style scoped>
/*-----------------------头部样式开始--------------------------*/
.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  line-height: 50px;
  background-color: #2d3a4b;

}

/*-----------------------头部样式结束--------------------------*/

/*-----------------------导航样式开始--------------------------*/
.navbar {
  position: absolute;
  top: 50px;
  width: 230px;
  bottom: 0;
  left: 0;
  line-height: 50px;
  background-color: #545c64;
  overflow: auto;
}

/*-----------------------导航样式结束--------------------------*/

/*-----------------------主区域样式开始--------------------------*/
.main {
  position: absolute;
  top: 50px;
  bottom: 0;
  left: 230px;
  right: 0;
  overflow: auto;
  padding: 10px;
}

/*-----------------------主区域样式结束--------------------------*/

</style>