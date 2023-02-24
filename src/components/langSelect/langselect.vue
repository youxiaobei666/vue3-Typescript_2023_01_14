<template>
  <el-dropdown class="langselect" triggle="click" @command="handSelect">
    <div class="langbox">
      <span :style="{ color: textcolor }">{{ $t('msg.nav_langselect') }} </span>
      <img class="langicon" src="../../../public/lang.png" alt="" />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="language === 'zh'" command="zh">
          中文
        </el-dropdown-item>
        <el-dropdown-item :disabled="language === 'en'" command="en">
          English
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import store from '@/store';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { ElMessage } from 'element-plus';
import vars from '@/scss/vars/index.module.scss';

const language: any = computed(() => {
  return store.state.language;
});

// 文字样式
const textcolor = vars.elpricol;

// 切换语言的方法
const i18n = useI18n();
const handSelect = (lang: string) => {
  // 切换local
  i18n.locale.value = lang;
  // vuex
  store.commit('setLanguage', lang);
  // 提示
  ElMessage.success('切换成功！');
};
</script>

<style lang="scss" scoped>
.langselect {
  .langbox {
    display: flex;
    align-items: center;
    font-weight: 500;
    .langicon {
      width: 26px;
      margin-left: 5px;
    }
  }
}
</style>
