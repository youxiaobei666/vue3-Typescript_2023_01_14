<template>
  <router-view></router-view>
</template>

<script lang="ts" setup></script>

<style lang="scss">
@import '@/scss/vars/index.module.scss';
// el 默认样式覆盖
// 01: el-menu-title bgcolor
.el-sub-menu__title {
  transition: none !important;
}

// 交换
.el-switch {
  .el-switch__label {
    color: $elpricol !important;
  }
}

.el-breadcrumb__inner {
  color: $elpricol !important;
}

// // 弹出
// .el-overlay {
//   z-index: 3 !important;
// }

// boder超出
.el-table {
  --el-table-border-color: none !important;
}

// tabs 修改top对称,多处来的边距内容对称
.el-tabs__nav {
  width: 320px !important;
}

.el-tabs__item {
  width: 161px !important;
  margin-left: none !important;
  text-align: center !important;
}

.el-tabs__item:first-child {
  margin-left: 0px !important;
  border-left: none !important;
}
</style>
