<template>
    <a-row  id = "globalHeader" class="grid-demo" style="margin-bottom: 16px;">
      <a-col flex="100px">
        <div>100px</div>
      </a-col>
      <a-col flex="auto">
        <div>
          <a-menu mode="horizontal"
                  theme="dark"
                  :selected-keys="selectKeys"
                  @menu-item-click="doMenuClick">
            <a-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }" disabled>
              <div
                  :style="{
            width: '80px',
            height: '30px',
            background: 'var(--color-fill-3)',
            cursor: 'text',
          }"
              />
            </a-menu-item>
            <a-menu-item  v-for ="itme in visibleRoutes" :key = "itme.path">{{ itme.name }}</a-menu-item>
          </a-menu>
        </div>
      </a-col>
      <a-col flex="100px">
        <div>{{store.state.user?.loginUser?.userName??"未登录" }}</div>
      </a-col>
    </a-row>


</template>
<script setup lang="ts">
import { routes } from '../router/routes';
import { useRouter } from "vue-router";
import {computed, ref} from "vue"
import {useStore} from "vuex";
import checkAccess from "@/access/checkAccess";
import ACCESS_ENUM from "@/access/accessEnum";
const store = useStore()
const router = useRouter();
const loginUser = store.state.user.loginUser;
// const route = useRouter();
//展示路由
const visibleRoutes = computed(() => {
  return routes.filter((item, index) => {
    if (item.meta?.hideInMenu) {
      return false;
    }
    // 根据权限过滤菜单
    if (
        !checkAccess(store.state.user.loginUser, item?.meta?.access as string)
    ) {
      return false;
    }
    return true;
  });
});


// const visbleRoutes =  routes.filter((item,index)=> {
//   if (item.meta?.hideInMenu) {
//     return false;
//   }
//   if (!checkAccess(store.state.user.loginUser, item.meta?.access as string)) {
//     return false
//   }
//   return true;
// })

//默认主页
const selectKeys = ref(["/"])
// 路由 更新
router.afterEach((to,from,fallure)=>{
  selectKeys.value = [to.path]
})
setTimeout(()=>{
  store.dispatch('user/getLoginUser',{
    userName:"詹远admin",
    userRole: ACCESS_ENUM.ADMIN
  });
},3000)
const doMenuClick =(key: string)=> {
  router.push({
    path:key
  })
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu-demo {
  box-sizing: border-box;
  width: 100%;
  padding: 40px;
  background-color: var(--color-neutral-2);
}
</style>
