<template>
  <div class="main">
    <Link v-show="$route.path!=='/home'"/>
    <router-view></router-view>
  </div>
</template>

<script>
import Link from "./Link";

export default {
  name: "index",
  components: {
    Link
  }
}
</script>