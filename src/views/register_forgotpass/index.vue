<template>
  <div class="container">
    <div class="langBox">
      <langselect></langselect>
    </div>
    <el-tabs type="border-card" class="tabs-container">
      <!-- Register -->
      <el-tab-pane class="register-label">
        <template #label>
          <el-icon class="register-icon"><Checked /></el-icon>
          <span class="register-text">{{ $t('msg.register') }}</span>
        </template>
        <!-- 表单form -->
        <el-form
          :model="registerData"
          :rules="registerDataRules"
          ref="ruleForm"
        >
          <el-form-item prop="userName">
            <el-input
              :placeholder="mastUserName"
              autofocus
              maxlenght="20"
              style="padding-bottom: 10px"
              v-model="registerData.userName"
            ></el-input
          ></el-form-item>
          <el-form-item prop="phoneNumber">
            <el-input
              :placeholder="mastPhoneNumber"
              style="padding-bottom: 10px"
              v-model="registerData.phoneNumber"
            >
              <template #append>
                <span class="getVertifyCodeBtn">
                  {{ $t('msg.getVertifyCode') }}
                </span>
              </template>
            </el-input></el-form-item
          >
          <el-form-item prop="phoneVertifyCode">
            <el-input
              v-model="registerData.phoneVertifyCode"
              :placeholder="RegPhoneVertifyCode"
              style="padding-bottom: 10px"
            >
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              :placeholder="pleaseinpass"
              style="padding-bottom: 10px"
              v-model="registerData.passWord"
            ></el-input
          ></el-form-item>
          <el-form-item prop="city">
            <el-input
              :placeholder="pleaseInputCity"
              style="padding-bottom: 10px"
              v-model="registerData.city"
            ></el-input
          ></el-form-item>
          <el-form-item>
            <el-button type="primary" class="registerBtn">
              {{ $t('msg.register') }}
            </el-button>
          </el-form-item>
        </el-form>
        <!-- 表单form -->
      </el-tab-pane>
      <!-- Forgot -->
      <el-tab-pane class="gorgot-label">
        <template #label>
          <span class="forgotpass">{{ $t('msg.forgotpass') }}</span>
        </template>
        <fotgotPass></fotgotPass>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import i18n from '@/i18n';
import { getStore } from '@/utils/localstore';
import { reactive, ref, computed } from 'vue';
import { FormInstance, FormRules } from 'element-plus'; // 导入表单实例和表单检测数据对象类型
import store from '@/store';
import fotgotPass from '@/views/register_forgotpass/fotgotPass.vue';
import langselect from '@/components/langSelect/langselect.vue';

// 解构 t
const { t } = i18n.global;
// 定义数据源接口 和数据源
interface IRegisterData {
  userName: string;
  phoneNumber: string;
  passWord: string;
  city: string;
  phoneVertifyCode: string;
}
const registerData = ref<IRegisterData>({
  userName: '',
  phoneNumber: '',
  passWord: '',
  city: '',
  phoneVertifyCode: '',
});

// 定义数据检测规则
// 必须用户名
const mastUserName: any = computed(() => {
  return t('msg.login_noUsername');
});
// 错的用户名
const falsename: any = computed(() => {
  return t('msg.login_falsename');
});
// 没输入密码，错误提示
const pleaseinpass: any = computed(() => {
  return t('msg.login_inputpass');
});
// 密码
const falsepass: any = computed(() => {
  return t('msg.login_falsepass');
});
// 提示输入 city
const pleaseInputCity: any = computed(() => {
  return t('msg.pleaseInputCity');
});
// 错误的city长度
const notValidLenghtCity: any = computed(() => {
  return t('msg.notValidLenghtCity');
});
// 必须电话号码
const mastPhoneNumber: any = computed(() => {
  return t('msg.mastPhoneNumber');
});
// 错误的 phone
const phoneReg = /^1[3456789]\d{9}$/;
const inValidPhoneNumber: any = computed(() => {
  return t('msg.inValidPhoneNumber');
});
// 验证码holder
const RegPhoneVertifyCode: any = computed(() => {
  return t('msg.RegPhoneVertifyCode');
});
const wrongVertifyCode: any = computed(() => {
  return t('msg.wrongVertifyCode');
});
// 验证 reg
const ruleForm = ref<FormInstance>();
const lang: any = computed(() => {
  return store.state.language;
});

const registerDataRules = reactive<FormRules>({
  userName: [
    {
      required: true,
      message: mastUserName,
      trigger: 'change',
    },
    {
      min: 1,
      max: 12,
      message: falsename,
      trigger: 'change',
    },
  ],
  phoneNumber: [
    {
      validator: (rule, value, callback) => {
        if (phoneReg.test(registerData.value.phoneNumber) === false) {
          if (lang.value == 'en') {
            callback(new Error('inValid Phone Number!'));
          } else {
            callback(new Error('错误格式的手机号'));
          }
        } else {
          callback(); // 通过验证
        }
      },
      trigger: 'change',
    },
    {
      required: true,
      message: mastPhoneNumber,
      trigger: 'change',
    },
    {
      min: 11,
      max: 11,
      message: inValidPhoneNumber,
      trigger: 'change',
    },
  ],
  phoneVertifyCode: [
    {
      required: true,
      message: RegPhoneVertifyCode,
      trigger: 'change',
    },
    {
      min: 6,
      max: 6,
      message: wrongVertifyCode,
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
  city: [
    {
      required: true,
      message: pleaseInputCity,
      trigger: 'change',
    },
    {
      min: 2,
      max: 20,
      message: notValidLenghtCity,
      trigger: 'change',
    },
  ],
});
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -50px;
  .langBox {
    width: 320px;
    height: auto;
    margin-bottom: 20px;
    text-align: end;
  }
  .tabs-container {
    .getVertifyCodeBtn {
      cursor: pointer;
    }
    width: 320px;
    .registerBtn {
      width: 100%;
    }
  }
}

// 修改图标坐标，本身具备position relative
.el-icon {
  top: 2px;
  left: -1px;
}

// App.vue
</style>
