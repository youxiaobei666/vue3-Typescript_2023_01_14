<template>
  <el-table :data="tableData" style="width: 100%" stripe>
    <el-table-column :label="$t('msg.menu_id')" width="100">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-icon><key></key></el-icon>
          <span style="margin-left: 10px">{{ scope.row.id }}</span>
        </div>
      </template>
    </el-table-column>
    <!-- 姓名 -->
    <el-table-column :label="$t('msg.menu_name')" width="100">
      <template #default="scope">
        <el-popover effect="light" trigger="hover" placement="top" width="auto">
          <template #default>
            <div>{{ $t('msg.menu_name') }}: {{ scope.row.name }}</div>
            <div>{{ $t('msg.menu_city') }}: {{ scope.row.city }}</div>
          </template>
          <template #reference>
            <el-tag>{{ scope.row.name }}</el-tag>
          </template>
        </el-popover>
      </template>
    </el-table-column>
    <!-- age -->
    <el-table-column :label="$t('msg.menu_age')" width="100">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-tag type="success">{{ scope.row.age }}</el-tag>
        </div>
      </template>
    </el-table-column>
    <!-- city -->
    <el-table-column :label="$t('msg.menu_city')" width="100">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-tag type="warning">{{ scope.row.city }}</el-tag>
        </div>
      </template>
    </el-table-column>

    <!-- email -->
    <el-table-column :label="$t('msg.menu_email')" width="250">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-icon><message></message></el-icon>
          <span style="margin-left: 10px">{{ scope.row.email }}</span>
        </div>
      </template>
    </el-table-column>
    <!-- hobby -->
    <el-table-column :label="$t('msg.menu_hobby')" width="120">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-icon><StarFilled /></el-icon>
          <span style="margin-left: 10px">{{ scope.row.hobby }}</span>
        </div>
      </template>
    </el-table-column>
    <!-- 操作 -->
    <el-table-column :label="$t('msg.menu_setup')" width="160">
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">{{
          $t('msg.edit')
        }}</el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >{{ $t('msg.delete') }}</el-button
        >
      </template>
    </el-table-column>
    <!-- img -->
    <el-table-column :label="$t('msg.menu_img')" width="200">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-avatar shape="square" :src="url1"></el-avatar>
          <el-button text @click="dialogVisible = true">
            {{ $t('msg.popover_img') }}
          </el-button>
          <el-dialog
            v-model="dialogVisible"
            width="40%"
            :before-close="handleClose"
          >
            <img :src="data.img" style="width: 400px" />

            <template #footer>
              <span class="dialog-footer">
                <el-button @click="dialogVisible = false">{{
                  $t('msg.popover_back')
                }}</el-button>
                <el-button type="primary" @click="dialogVisible = false">
                  {{ $t('msg.popover_confirm') }}
                </el-button>
              </span>
            </template>
          </el-dialog>
        </div>
      </template>
    </el-table-column>
  </el-table>

  <router-view></router-view>
</template>

<script setup lang="ts">
import store from '@/store';
import i18n from '@/i18n/index';
import { computed, ref, reactive, toRefs } from 'vue';
import { ElMessageBox } from 'element-plus';

// i18n
const { t } = i18n.global;

// 表单处理

// big img
const dialogVisible = ref(false);

const handleClose = (done: () => void) => {
  ElMessageBox.confirm(t('msg.popover_ask'))
    .then(() => {
      done();
    })
    .catch(() => {
      // catch error
    });
};

// 接口
interface User {
  id: string;
  name: string;
  age: string;
  img: string;
  city: string;
  email: string;
  hobby: string;
  setup: string;
}

// 编辑&删除
const handleEdit = (index: number, row: User) => {
  
};
const handleDelete = (index: number, row: User) => {
 
};

// 表格数据源
const data = store.state.userInfo;
const tableData: User[] = [
  {
    id: data.id,
    name: data.name,
    age: data.age,
    img: data.img,
    city: data.city,
    email: data.email,
    hobby: data.hobby,
    setup: '删除',
  },
];
// img URl
const state = reactive({
  url1: data.img,
});
const { url1 } = toRefs(state);
</script>

<style scoped lang="scss">
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
