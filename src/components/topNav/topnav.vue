<template>
  <div
    class="big-box"
    ref="big_box"
    :style="{ backgroundColor: bg, color: textbg }"
  >
    <el-breadcrumb separator="/" class="bread">
      <el-breadcrumb-item :to="{ path: '/home' }">{{
        $t('msg.menu_home')
      }}</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: curentpath.path }">{{
        curentpath.path.split('/')[2]
      }}</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: curentpath.path }">{{
        curentpath.path.split('/')[3]
      }}</el-breadcrumb-item>
    </el-breadcrumb>
    <!--  -->
    <div class="flex-box">
      <!-- 搜索框 -->
      <el-input
        class="el-input"
        v-model="inputdata"
        :placeholder="$t('msg.input_holder')"
        :suffix-icon="Search"
      />
      <!-- 语言组件 -->
      <langselect class="langselect"></langselect>
      <!-- 主题组件 -->
      <div class="theme">
        <el-switch
          @click="change"
          v-model="value"
          size="small"
          :active-text="active_text"
          :inactive-text="inactive_text"
        ></el-switch>
      </div>
      <!-- 用户头像 -->
      <div class="user-img">
        <el-dropdown size="large">
          <el-avatar
            :size="userImgSize"
            :src="Url"
            @mouseover="imgSizeBigger"
            @mouseout="imgSizeSmaller"
          ></el-avatar>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                {{ $t('msg.menu_userinfo') }}
              </el-dropdown-item>
              <el-dropdown-item @click="toLogin">
                {{ $t('msg.reLogin') }}
              </el-dropdown-item>

              <el-dropdown-item @click="toRegister">{{
                $t('msg.toRegister')
              }}</el-dropdown-item>

              <el-dropdown-item @click="toLogin" divided>
                {{ $t('msg.outLogin') }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <!-- 通知 -->
      <div class="notification" @click="drawer = true">
       <el-badge :value="2">
        <el-icon :size="20" :color="vars.elpricol">
          <BellFilled />
        </el-icon>
       </el-badge>
        <el-drawer v-model="drawer" title="通知：" direction="rtl">
          <div class="notifi-item">
            <el-avatar :size="40" :src="Url"></el-avatar>
            <span>:这是一条通知</span>
          </div>
          <div class="notifi-item">
            <el-avatar :size="40" :src="Url"></el-avatar>
            <span>:这是一条通知</span>
          </div>
        </el-drawer>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import store from '@/store/index';
import router from '@/router';
import { ref } from 'vue';
import { reactive, toRefs } from 'vue';
import langselect from '@/components/langSelect/langselect.vue';
import vars from '@/scss/vars/index.module.scss';
import { Flag, Search } from '@element-plus/icons-vue';
import i18n from '@/i18n';
import { computed } from '@vue/reactivity';
import { ElMessageBox } from 'element-plus';

// 跳转注册
const toRegister = () => {
  router.push('/register_forgotpass');
};
// 跳转登陆
const toLogin = () => {
  router.push('/login');
};

// 图片放大功能
const userImgSize: any = computed(() => {
  return store.state.userImgSize;
});
const imgSizeBigger = () => {
  store.state.userImgSize = 50;
};
const imgSizeSmaller = () => {
  store.state.userImgSize = 40;
};

// 搜索框
const inputdata = ref();

// 通知框
const drawer = ref(false);
// 关闭
function cancelClick() {
  drawer.value = false;
}

//面包屑
const curentpath: any = computed(() => {
  return router.currentRoute.value;
});

// 头像
const state = reactive({
  Url: store.state.userInfo.img,
});
const { Url } = toRefs(state);

// 主题
const big_box = ref();
const value = ref(false);
let themeflag = true;
// let bg = vars.lightbg;
var bg = computed(() => {
  // 受到系统设置的改变
  return store.state.menubg;
});
const textbg = computed(() => {
 

  return store.state.textbg;
});
const change = function () {
  // 只在黑白之间切换
  if (themeflag) {
    themeflag = !themeflag;
    // 更新 vuex 中的颜色值 menubg
    store.commit('changemenubg', '#111111');
    store.commit('changemenutext', '#ffffff');
  } else {
    themeflag = !themeflag;
    // 更新 vuex 中的颜色值 menubg
    store.commit('changemenubg', '#ffffff');
    store.commit('changemenutext', '#111111');
  }
};

// swith 语言切换
const { t } = i18n.global;
const active_text = computed(() => {
  return t('msg.nav_light_color');
});
const inactive_text = computed(() => {
  return t('msg.nav_dark_color');
});
</script>

<style lang="scss" scoped>
@import '@/scss/vars/index.module.scss';
.big-box {
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: $darkbg;
  position: relative;
  .bread {
    position: absolute;
    left: 10px;
  }
  .flex-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 800px;
    position: absolute;
    right: 0px;
    .el-input {
      flex: 1.5;
    }
    .notification {
      flex: 0.3;
      cursor: pointer;
    }
    .langselect {
      justify-content: center;
      flex: 1;
      width: 100px;
    }
    .theme {
      flex: 1;
      justify-content: center;
      text-align: center;
    }

    .user-img {
      text-align: center;
      flex: 1;
      justify-content: center;
      // .img {
      //   transition: ease 1s;
      // }
      .el-avatar {
        transition: ease 0.1s;
      }
    }
  }
}
</style>
