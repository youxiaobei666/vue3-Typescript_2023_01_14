<template>
  <div class="userSearchContain">
    <!-- 搜索框 -->
    <div class="title">
      {{ $t('msg.inputSearchUser') }}
    </div>
    <el-input
      class="el-input"
      v-model="inputdata"
      :placeholder="$t('msg.inputSearchUser')"
    >
      <template #append>
        <!-- <el-icon class="userSearchIcon"><Search></Search></el-icon> -->
        <el-button :icon="Search"></el-button>
      </template>
    </el-input>
  </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue';
import { ref } from 'vue';
const inputdata = ref('');
</script>

<style scoped lang="scss">
.userSearchContain {
  text-align: center;
  .userSearchIcon {
    cursor: pointer;
  }
  .title {
    text-align: center;
    font-size: 18px;
    margin-bottom: 10px;
  }
  .el-input {
    width: 50%;
    margin-bottom: 20px;
  }
}
</style>
