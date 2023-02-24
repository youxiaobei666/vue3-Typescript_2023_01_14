<template>
  <div class="base-message-container">
    <div class="info-container">
      <ul class="list-container">
        <li class="list">
          <span>{{ $t('msg.menu_name') }}</span>
          <span>{{ store.state.userInfo.name }}</span>
          <el-icon class="icon" color="#409eff" size="20"
            ><ArrowRight
          /></el-icon>
        </li>
        <li class="list">
          <span>{{ $t('msg.menu_img') }}</span>

          <el-form-item :label="$t('msg.upload_img')" class="upload">
            <el-upload
              class="avatar-uploader"
              action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
              :show-file-list="false"
              :multiple="true"
            >
              <template #trigger>
                <el-button type="primary">{{
                  $t('msg.upload_text')
                }}</el-button>
              </template>
            </el-upload>
          </el-form-item>
        </li>
        <li class="list">
          <span>{{ $t('msg.menu_email') }}</span>
          <span>{{ store.state.userInfo.email }}</span>
          <el-icon class="icon" color="#409eff" size="20"
            ><ArrowRight
          /></el-icon>
        </li>
      </ul>
    </div>
    <div class="img-container"></div>
  </div>
</template>

<script setup lang="ts">
import store from '@/store/index';
</script>

<style scoped lang="scss">
@import '@/scss/vars/index.module.scss';
.base-message-container {
  display: flex;
  margin-top: 40px;
  width: 100%;
  height: 500px;
  .info-container {
    flex: 3;
    height: 50%;
    border-radius: 20px;
    padding: 10px;
    border: 1px solid $lightGray;
    &:hover {
      box-shadow: 5px 5px 5px $lightGray;
    }
    .list-container {
      display: flex;
      height: 100%;
      list-style: none;
      flex-direction: column;
      .list {
        flex: 1;
        border-bottom: 1px solid $lightGray;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        .upload {
          margin-bottom: 0;
        }

        span {
          cursor: pointer;
        }

        .icon {
          cursor: pointer;
        }
      }
    }
  }
  .img-container {
    width: 50px;
    flex: 2;
    background: url('../../../../public/userinfo.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 0 30px;
  }
}
</style>
