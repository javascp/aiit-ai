<template>
  <div id="add">
    <BasictLayout></BasictLayout>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<script setup lang="ts">
import BasictLayout from "@/layouts/BasictLayout";
import {useRouter} from "vue-router";
import {useStore} from "vuex";

/**
 * 全局初始化
 */
const doInit=()=>{
  console.log("ai数字助教2.0")
}
const router = useRouter()
const store = useStore()
router.beforeEach((to,from,next)=>{
  console.log(to.meta?.access + store.state.user.loginUser?.userRole)
  if(to.meta?.access == 'admin'){
    if(store.state.user.loginUser?.userRole !='admin'){
      next("/noAuth");
      return
    }
  }
  next()
  console.log(to)
})
</script>
