<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item class="line" :to="{ path: $route.path}">{{$route.meta.title}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: "Link"
}
</script>

<style scoped>
.el-breadcrumb{
  height: 10px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}
.line{
  padding-left: 10px;
  border-left: 3px solid green;
}
</style>