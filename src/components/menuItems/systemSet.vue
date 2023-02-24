<template>
  <div class="systemSet">
    <div class="title">
      {{ $t('msg.menu_system_setup') }}
    </div>
    <el-card shadow="hover" class="card-item">
      <div class="colorselect">
        <!-- :style="{ borderBottom: store.state.bordercolor }" -->
        <span>{{ $t('msg.systemset_choosebg') }} : </span>
        <ElColorPicker
          v-model="color1"
          @change="colorchange"
        ></ElColorPicker></div
    ></el-card>
    <el-card class="card-item" shadow="hover"
      ><div class="bdcolorselect">
        <span>{{ $t('msg.systemset_choosebdbg') }} : </span>
        <ElColorPicker
          v-model="color2"
          @change="bdcolorchange"
        ></ElColorPicker></div
    ></el-card>
    <el-card class="card-item" shadow="hover">
      <div class="textcolorselect">
        <span>{{ $t('msg.systemset_choosetextbg') }} : </span>
        <ElColorPicker
          v-model="color3"
          @change="textcolorchange"
        ></ElColorPicker></div
    ></el-card>
  </div>
</template>

<script setup lang="ts">
import store from '@/store';

import { ElColorPicker } from 'element-plus';
import { ref, computed } from 'vue';
import i18n from '@/i18n';

const color1: any = ref('#ffffff');
const color2: any = ref('#409eff');
const color3: any = ref('#111111');
// 背景色
const colorchange = function () {
  store.state.menubg = color1._value;
};
// 边框色
const bdcolorchange = function () {
  store.state.bordercolor = color2._value + ' solid 1px';
};
// 文字色
const textcolorchange = function () {
  store.state.textbg = color3;
};
</script>

<style scoped lang="scss">
.systemSet {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .title {
    width: 100%;
    text-align: center;
    font-size: 20px;
    height: 40px;
  }
  .card-item {
    width: 90%;
    margin-bottom: 10px;
  }
  .colorselect {
    padding: 10px 0;
  }
  .bdcolorselect {
    padding: 10px 0;
  }
  .textcolorselect {
    padding: 10px 0;
  }
}
</style>
