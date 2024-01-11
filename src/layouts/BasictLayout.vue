<template>
  <div id = "basicLayout">
    <a-layout style="height: 400px;">
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class = "content">
        <router-view></router-view>
      </a-layout-content>
        <a-layout-footer class  = "footer">Footer</a-layout-footer>
    </a-layout>
  </div>
</template>
<script>
import GlobalHeader from "../components/GlobalHeader";
export default {
  components: { GlobalHeader },

};
</script>
<style scoped>
#basicLayout .header{
  background:#fff;
  margin-bottom: 16px;
}
#basicLayout .content{
  background: linear-gradient(to right,#2c3e50,#fff);
}
#basicLayout .footer{
  background: #42b983;
}
</style>
