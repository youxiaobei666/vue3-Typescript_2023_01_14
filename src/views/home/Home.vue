<template>
  <div class="main" :style="{ backgroundColor: menubg }">
    <div class="left-menu">
      <left-menu></left-menu>
    </div>
    <div class="right-box">
      <div class="top-nav"><Topnav></Topnav></div>
      <div
        class="showeara"
        :style="{
          color: showtext,
          borderLeft: bordercolor,
          borderTop: bordercolor,
        }"
      >
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LeftMenu from '@/components/menu/menu.vue';
import Topnav from '@/components/topNav/topnav.vue';
import store from '@/store/index';
import { computed } from 'vue';

// bg
const menubg: any = computed(() => {
  return store.state.menubg;
});

const showtext: any = computed(() => {
  return store.state.textbg;
});
const bordercolor: any = computed(() => {
  return store.state.bordercolor;
});
</script>

<style lang="scss" scoped>
@import '@/scss/vars/index.module.scss';
.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

  .left-menu {
    width: 220px !important;
    height: 100%;
  }
  .right-box {
    flex: 1;
    display: flex;
    flex-direction: column;
    .showeara {
      width: 100%;
      flex: 1;
      border-radius: 30px 0 0 0;
      padding: 20px;
    }
  }
}
</style>
