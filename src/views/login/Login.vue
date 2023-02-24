<template>
  <div class="login-page">
    <div class="login-box">
      <h3 class="login-title">{{ $t('msg.login_title') }}</h3>
      <langselect class="langSelect"></langselect>
      <el-form ref="ruleForm" :model="LoginCount" :rules="LoginRules">
        <el-form-item prop="name">
          <el-input
            autofocus
            maxlenght="20"
            style="padding-bottom: 10px"
            :placeholder="noUsername"
            v-model="LoginCount.name"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            show-password
            type="password"
            maxlenght="20"
            :placeholder="pleaseinpass"
            style="padding-bottom: 10px"
            v-model="LoginCount.password"
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="login-options" style="padding-bottom: 10px">
        <div class="switch">
          <el-switch size="small" v-model="ifRemember"></el-switch
          ><span class="switch-text" style="color: #409eff; font-weight: 500">{{
            $t('msg.login_remember')
          }}</span>
        </div>
        <el-link
          class="forgotPass"
          type="primary"
          @click="handleToRegister_Pass"
          >{{ $t('msg.register_Retrieve') }}</el-link
        >
      </div>
      <el-button
        v-loading.fullscreen.lock="fullscreenLoading"
        @click="LoginHandle"
        class="loginBtn"
        style="padding-bottom: 10px"
        type="primary"
        >{{ $t('msg.login_title') }}</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import '@/scss/login/index.scss'; // 导入login样式

import { reactive, ref } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import request from '@/utils/request';
import store from '@/store/index';
import router from '@/router/index';
import { setStore } from '@/utils/localstore/index';
import langselect from '@/components/langSelect/langselect.vue';
import i18n from '@/i18n';

import { ElLoading } from 'element-plus';
import { computed } from '@vue/reactivity';

// 记住密码 后保存
const ifRemember = ref(true);

// 注册按钮事件
const handleToRegister_Pass = () => {
  router.push('/register_forgotpass');
};

// i18n
const { t } = i18n.global;
// holder没输入密码，错误提示
const pleaseinpass: any = computed(() => {
  return t('msg.login_inputpass');
});
// holder没输入用户名
const noUsername: any = computed(() => {
  return t('msg.login_noUsername');
});
// 错的用户名
const falsename: any = computed(() => {
  return t('msg.login_falsename');
});
// 错的密码
const falsepass: any = computed(() => {
  return t('msg.login_falsepass');
});

// 定义用户列表
interface ILoginCount {
  name: string;
  password: string;
}
const LoginCount = ref<ILoginCount>({
  name: '',
  password: '',
});

// 表单验证
const ruleForm = ref<FormInstance>();
const LoginRules = reactive<FormRules>({
  name: [
    {
      required: true,
      message: noUsername,
      trigger: 'change',
    },
    {
      min: 1,
      max: 12,
      message: falsename,
      trigger: 'change',
    },
  ],
  password: [
    {
      required: true,
      message: pleaseinpass,
      trigger: 'change',
    },
    {
      min: 6,
      max: 6,
      message: falsepass,
      trigger: 'change',
    },
  ],
});

// 加载loading
const fullscreenLoading = ref(false);

const openFullScreen1 = () => {
  // 蒙版打开
  fullscreenLoading.value = true;

  setTimeout(() => {
    // 两秒后蒙版关闭
    fullscreenLoading.value = false;

    // 判断用户是否存在
    for (var i = 0; i < store.state.userInfo.length; i++) {
      if (store.state.userInfo[i].name === LoginCount.value.name) {
       

        // 判断密码是不是正确

        if (LoginCount.value.password == '001223') {
          // 密码正确
       
          // 1.存储数据在vuex
          store.state.userAll = store.state.userInfo;
          store.state.userInfo = store.state.userInfo[i];

          // 2.本地
          setStore('thisuserinfo', store.state.userInfo);
          setStore('thisuserallinfo', store.state.userAll);
          // 3. 存储token
          setStore('token', 'token');
          // 跳转主页
          router.push('/home');
        } else {
          alert('密码错误！');
          router.push('/login');
          return;
        }
      } else {
        // 确保循环结束
        if (i === store.state.userInfo.length) {
         
          alert('用户：' + LoginCount.value.name + '不存在，请注册');
        

          router.push('/login');
          return;
        }
      }
    }
  }, 1000);
};

// 登陆动作
const LoginHandle = () => {
  request('/api'); // 请求全体用户数据

  openFullScreen1(); // 触发加载，获取数据

  if (ifRemember) {
    setStore('password', LoginCount.value.password);
  }
};
</script>

<style lang="scss" scoped></style>
