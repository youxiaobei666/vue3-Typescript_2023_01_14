<template>
  <!-- tableall -->
  <el-table
    :data="tableData"
    style="width: 98%"
    stripe
    height="300px"
    :scrollbar-always-on="true"
  >
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
          <el-avatar shape="square" :src="scope.row.img"></el-avatar>
          <div @click="dialogVisible = true">
            <el-button text @click="handleShowBigImg(scope.$index, scope.row)">
              {{ $t('msg.popover_img') }}
            </el-button>
          </div>

          <el-dialog v-model="dialogVisible" width="40%" :show-close="false">
            <!-- 弹出内容 -->
            <el-avatar :src="BigImgUrl" :size="300" shape="square"></el-avatar>
            <!-- 弹出内容 -->
            <template #footer>
              <span class="dialog-footer">
                <el-button>{{ $t('msg.popover_back') }}</el-button>
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
import { logicalExpression } from '@babel/types';
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
// i18n
const { t } = i18n.global;

// big img
let BigImgUrl = '';
let dialogVisible: any = ref(false);
const handleShowBigImg = (index: number, row: any) => {
  // 必须先绑定图片
  BigImgUrl = row.img;
};

// 编辑&删除
const handleEdit = (index: number, row: User) => {};
const handleDelete = (index: number, row: User) => {};

// 表格数据源
const data = store.state.userAll;

const tableData: User[] = [
  {
    id: data[0].id,
    name: data[0].name,
    age: data[0].age,
    img: data[0].img,
    city: data[0].city,
    email: data[0].email,
    hobby: data[0].hobby,
    setup: '删除',
  },
  {
    id: data[1].id,
    name: data[1].name,
    age: data[1].age,
    img: data[1].img,
    city: data[1].city,
    email: data[1].email,
    hobby: data[1].hobby,
    setup: '删除',
  },
  {
    id: data[2].id,
    name: data[2].name,
    age: data[2].age,
    img: data[2].img,
    city: data[2].city,
    email: data[2].email,
    hobby: data[2].hobby,
    setup: '删除',
  },
  {
    id: data[3].id,
    name: data[3].name,
    age: data[3].age,
    img: data[3].img,
    city: data[3].city,
    email: data[3].email,
    hobby: data[3].hobby,
    setup: '删除',
  },
  {
    id: data[4].id,
    name: data[4].name,
    age: data[4].age,
    img: data[4].img,
    city: data[4].city,
    email: data[4].email,
    hobby: data[4].hobby,
    setup: '删除',
  },
  {
    id: data[5].id,
    name: data[5].name,
    age: data[5].age,
    img: data[5].img,
    city: data[5].city,
    email: data[5].email,
    hobby: data[5].hobby,
    setup: '删除',
  },
  {
    id: data[6].id,
    name: data[6].name,
    age: data[6].age,
    img: data[6].img,
    city: data[6].city,
    email: data[6].email,
    hobby: data[6].hobby,
    setup: '删除',
  },
];
</script>

<style scoped lang="scss">
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
