<template>
  <!-- 用户添加模块 -->
  <useradd></useradd>
  <!-- 用户查找 -->
  <userSelect></userSelect>
  <!-- 用户总表 -->
  <div class="tabletitel">
    {{ $t('msg.userall') }}
  </div>
  <userall></userall>
</template>

<script setup lang="ts">
import useradd from '@/userAddCom/useradd.vue';
import userall from '@/userAllTabel/userAllTabel.vue';
import userSelect from '.@/components/userSelect/userSelect.vue';
</script>

<style scoped lang="scss">
.tabletitel {
  width: 100%;
  text-align: center;
  font-size: 18px;
  margin-bottom: 10px;
}
</style>
