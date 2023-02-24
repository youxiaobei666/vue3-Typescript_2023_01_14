<template>
  <el-form :model="forgotData" :rules="forgotRules" ref="ruleForm">
    <el-form-item prop="userName">
      <el-input
        v-model="forgotData.userName"
        :placeholder="mastUserName"
      ></el-input>
    </el-form-item>
    <el-form-item prop="phoneNumber">
      <el-input :placeholder="mastPhoneNumber" v-model="forgotData.phoneNumber">
        <template #append>
          <el-button>
            {{ $t('msg.getVertifyCode') }}
          </el-button>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="phoneVertifyCode">
      <el-input
        :placeholder="RegPhoneVertifyCode"
        v-model="forgotData.phoneNumber"
      ></el-input>
    </el-form-item>
    <el-form-item prop="newPassword">
      <el-input v-model="forgotData.newPassword" :placeholder="pleaseinpass">
      </el-input>
    </el-form-item>
    <el-button type="primary" class="submit-btn">{{ $t('msg.popover_confirm') }}</el-button>
  </el-form>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue';
import { FormRules, FormInstance } from 'element-plus';
import store from '@/store';
import i18n from '@/i18n';

const { t } = i18n.global;
const mastUserName: any = computed(() => {
  return t('msg.login_noUsername');
});
// 错的用户名
const falsename: any = computed(() => {
  return t('msg.login_falsename');
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
// 没输入密码，错误提示
const pleaseinpass: any = computed(() => {
  return t('msg.login_inputpass');
});
// 密码
const falsepass: any = computed(() => {
  return t('msg.login_falsepass');
});
const lang: any = computed(() => {
  return store.state.language;
});
const ruleForm = ref<FormInstance>();
interface IforgotData {
  userName: string;
  phoneNumber: string;
  phoneVertifyCode: string;
  newPassword: string;
}
// 数据源
const forgotData = ref<IforgotData>({
  userName: '',
  phoneNumber: '',
  phoneVertifyCode: '',
  newPassword: '',
});
// 规则

const forgotRules = reactive<FormRules>({
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
        if (phoneReg.test(forgotData.value.phoneNumber) === false) {
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
  newPassword: [
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
</script>

<style scoped lang="scss">
.submit-btn {
  width: 100%;
}
</style>
