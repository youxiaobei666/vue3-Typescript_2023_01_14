<template>
  <div class="useradd">
    <div class="title">{{ $t('msg.form_adduser') }}</div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <!-- naem -->
      <el-form-item :label="$t('msg.menu_name')">
        <el-input :placeholder="$t('msg.login_noUsername')" />
      </el-form-item>
      <!-- age -->
      <el-form-item :label="$t('msg.menu_age')">
        <el-input :placeholder="$t('msg.add_pleaseinage')" />
      </el-form-item>
      <!-- 生日 -->
      <el-form-item :label="$t('msg.menu_birth')">
        <div>
          <el-date-picker
            v-model="birth"
            type="date"
            :placeholder="$t('msg.datepick')"
            :disabled-date="disabledDate"
            :shortcuts="shortcuts"
          />
        </div>
      </el-form-item>
      <!-- 地点 -->
      <el-form-item :label="$t('msg.menu_city')">
        <KSelectArea @change="change"></KSelectArea>
      </el-form-item>
      <!-- 上传头像 -->
      <br />
      <el-form-item :label="$t('msg.upload_img')">
        <el-upload
          class="avatar-uploader"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <template #trigger>
            <el-button type="">{{ $t('msg.upload_text') }}</el-button>
          </template>
        </el-upload>
      </el-form-item>
      <!-- hobby -->
      <el-form-item :label="$t('msg.menu_hobby')">
        <el-input :placeholder="$t('msg.add_pleaseinhobby')" />
      </el-form-item>
      <!-- password -->
      <el-form-item :label="$t('msg.menu_password')">
        <el-input :placeholder="$t('msg.add_pleaseinpass')" />
      </el-form-item>
      <!-- 提交btn-->
      <el-form-item>
        <el-button type="primary" @click="onSubmit">{{
          $t('msg.form_adduser')
        }}</el-button>
      </el-form-item>
      <!--  -->
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { ElMessage } from 'element-plus';
import { SelectAreaEmits, KSelectArea } from '@tomiaa/vue3-components';
import type { UploadProps } from 'element-plus';

// 上传头像
const imageUrl = ref('');
const handleAvatarSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!);
};
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!');
    return false;
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!');
    return false;
  }
  return true;
};

// regin地区
const change: SelectAreaEmits['change'] = (data) => {
  
};

// 日期绑定
const birth = ref('');
// 日期快速选择
const shortcuts = [
  {
    text: '今天',
    value: new Date(),
  },
  {
    text: '昨天',
    value: () => {
      const date = new Date();
      date.setTime(date.getTime() - 3600 * 1000 * 24);
      return date;
    },
  },
  {
    text: '一个星期前',
    value: () => {
      const date = new Date();
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
      return date;
    },
  },
];
// 不可选
const disabledDate = (time: Date) => {
  return time.getTime() > Date.now();
};

const formInline = reactive({
  city: '',
});

// 添加成功
const onSubmit = () => {
 
};
</script>

<style scoped lang="scss">
.useradd {
  width: 100%;
  .title {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
    font-size: 18px;
  }
}
</style>
