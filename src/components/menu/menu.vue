<template>
  <el-menu
    :background-color="menubg"
    :text-color="textbg"
    class="el-menu-vertical-demo"
    router
    :default-openeds="defaultOpen"
  >
    <el-sub-menu class="elsubmenu" index="1">
      <template #title>
        <el-icon>
          <User></User>
        </el-icon>
        <span>{{ $t('msg.menu_userinfo') }}</span>
      </template>
      <el-menu-item class="elsubmenu" index="/home/userinfo/usercard">
        <el-icon><Postcard></Postcard></el-icon>
        <span>{{ $t('msg.menu_id') }}: {{ store.state.userInfo.id }}</span>
      </el-menu-item>
      <el-menu-item index="/home/userinfo/usercard">
        <el-icon><Help></Help></el-icon>
        <span>{{ $t('msg.menu_name') }}: {{ store.state.userInfo.name }}</span>
      </el-menu-item>
      <el-menu-item index="/home/userinfo/usercard">
        <el-icon><Location></Location></el-icon>
        <span>{{ $t('msg.menu_city') }}: {{ store.state.userInfo.city }}</span>
      </el-menu-item>
      <el-menu-item index="/home/userinfo/usercard">
        <el-icon><Star></Star></el-icon>
        <span
          >{{ $t('msg.menu_hobby') }}: {{ store.state.userInfo.hobby }}</span
        >
      </el-menu-item>
    </el-sub-menu>
    <!-- 系统菜单 -->
    <el-menu-item index="/home/sysmenu">
      <el-icon><Menu></Menu></el-icon>
      <span>{{ $t('msg.menu_system_menu') }}</span>
    </el-menu-item>
    <el-menu-item index="/home/chats">
      <el-icon><ChatDotSquare></ChatDotSquare></el-icon>
      <span>{{ $t('msg.menu_chats_center') }}</span>
    </el-menu-item>
    <el-menu-item index="/home/systemSet">
      <el-icon><setting /></el-icon>
      <span>{{ $t('msg.menu_system_setup') }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { Postcard, Star } from '@element-plus/icons-vue';
import store from '@/store/index';
import { ref, computed } from 'vue';
import router from '@/router';
import { getStore } from '@/utils/localstore/index';

const defaultOpen = ['1']

// 刷新后保存数据vuex
let vuexuserinfo: any = getStore('thisuserinfo');
let vuexuserallinfo: any = getStore('thisuserallinfo');
// console.log(vuexuserinfo);
store.state.userInfo = vuexuserinfo;
store.state.userAll = vuexuserallinfo;

// bg
const menubg = computed(() => {
  return store.state.menubg;
});
// textcolor
const textbg = computed(() => {
  return store.state.textbg;
});
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo {
  border-right: 0px;
}
</style>
