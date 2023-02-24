<template>
  <div class="title">{{ $t('msg.menu_chats_center') }}</div>
  <div class="main-container">
    <div class="left-container">
      <el-card shadow="hover" class="box-card">
        <el-avatar :src="store.state.userInfo.img"></el-avatar>
        <span>:</span>
        <span>这是一条咩有感情的评论。。。</span>
      </el-card>
      <el-card shadow="hover" class="box-card">
        <el-avatar :src="store.state.userInfo.img"></el-avatar>
        <span>:</span>
        <span>这又是一条咩有感情的评论。。。</span>
      </el-card>
      <div class="remark-box">
        <div class="remark-titel">{{ $t('msg.remark_title') }}:</div>
        <br />
        <el-input
          v-model="textarea"
          maxlength="90"
          :placeholder="remark_holder"
          show-word-limit
          type="textarea"
          :rows="3"
        />
        <el-button class="submit-button">
          {{ $t('msg.remark_submit') }}
        </el-button>
      </div>
    </div>
    <div class="right-container"></div>
  </div>
</template>

<script setup lang="ts">
import i18n from '@/i18n';
import { ref } from 'vue';
import { computed } from 'vue';
import store from '@/store';

const { t } = i18n.global;
const textarea = ref();
const remark_holder = computed(() => {
  return t('msg.remark_texterea');
});
</script>

<style scoped lang="scss">
.title {
  width: 100%;
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
}
.main-container {
  display: flex;
  flex-direction: row;
  .left-container {
    flex: 3;

    .box-card {
      width: 100%;
      height: 100px;
      margin-bottom: 10px;
    }
  }
  .right-container {
    flex: 2;
    background: url('../../../public/remark.png');
    background-repeat: no-repeat;
    background-size: contain;
  }
}
.remark-box {
  width: 100%;

  .submit-button {
    margin-top: 20px;
  }
}
</style>
