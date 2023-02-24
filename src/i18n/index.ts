// 创建语言列表，不同语言的内容
const messages = {
  en: {
    msg: {
      // remark
      remark_title: 'remark',
      remark_submit: 'submit',
      remark_texterea: 'please input your remark',
      // userDropDown
      reLogin: 'ReLogin',
      outLogin: 'Out Login',
      toRegister: 'to Register',
      // register_pass
      wrongVertifyCode: 'wrong vertification code',
      RegPhoneVertifyCode: 'input vertification code',
      getVertifyCode: 'Get verify code',
      register: 'Register',
      forgotpass: 'ForgotPassword',
      pleaseInputCity: 'please input city',
      mastPhoneNumber: 'you need to input phone number',
      notValidLenghtCity: 'not Valid Lenght of City',
      inValidPhoneNumber: 'inValid Phone Number!',
      // form add
      form_adduser: 'add this user',
      inputSearchUser: 'search user',
      userall: 'All user',
      // upload
      upload_img: 'upload img',
      upload_text: 'select file',
      // search
      input_holder: 'search something...',
      // date
      datepick: 'Pick a day',
      // adduser
      add_pleaseinage: 'please input user age',
      add_pleaseinhobby: 'please input user hobby',
      add_pleaseinpass: 'please input user password',
      // popover
      popover_img: 'look big img',
      popover_back: 'false',
      popover_confirm: 'confirm',
      popover_ask: 'are sure you want close this tag ?',
      // table
      edit: 'edit',
      delete: 'delete',
      // showeara
      showtext: 'hello world',
      // menu
      menu_userinfo: 'user infomation',
      menu_home: 'home',
      menu_id: 'user ID',
      menu_name: 'user name',
      menu_age: 'user age',
      menu_birth: 'birthday',
      menu_img: 'user img',
      menu_city: 'address',
      menu_email: 'email',
      menu_hobby: 'bobby',
      menu_setup: 'adjustment',
      menu_password: 'password',
      menu_system_menu: 'user Administration',
      menu_chats_center: 'chats center',
      menu_system_setup: 'system setup',
      // top nav
      nav_langselect: 'langSelect',
      nav_light_color: 'lightColor',
      nav_dark_color: 'darkColor',
      // login
      login_title: 'Login',
      login_remember: 'retainPassword',
      register_Retrieve: 'register&Retrieve',
      login_inputpass: 'please input the password',
      login_noUsername: 'please input your username',
      login_falsename: 'Please enter a username of 1-12 words',
      login_falsepass: 'Only 6-digit passwords are allowed',
      systemset_choosebg: 'choose the background color as you want',
      systemset_choosebdbg: 'choose the border background color as you want',
      systemset_choosetextbg: 'choose the text color as you want',
    },
  },
  zh: {
    msg: {
      // 评论
      remark_title: '评论',
      remark_submit: '提交',
      remark_texterea: '请留下你的评论',
      // 用户头像下拉菜单
      reLogin: '重新登陆',
      outLogin: '退出登陆',
      toRegister: '注册账号',
      // 注册和忘记密码
      wrongVertifyCode: '请输入6位数的手机验证码',
      RegPhoneVertifyCode: '输入验证码',
      getVertifyCode: '获取验证码',
      register: '注册',
      forgotpass: '忘记密码',
      pleaseInputCity: '请输入城市',
      notValidLenghtCity: '请输入 2- 20 位字符的城市',
      mastPhoneNumber: '必须输入电话号码',
      inValidPhoneNumber: '错误格式的手机号',
      // 表单添加
      inputSearchUser: '查找用户',
      form_adduser: '添加用户',
      userall: '全部用户',
      // 上传
      upload_img: '上传头像',
      upload_text: '选择文件',
      // 搜索
      input_holder: '输入想搜索的...',
      // 日期选择
      datepick: '选择一天',
      // 添加用户
      add_pleaseinage: '请输入年龄',
      add_pleaseinhobby: '请输入爱好',
      add_pleaseinpass: '请输入密码',
      // 弹出框
      popover_img: '查看大图',
      popover_back: '取消',
      popover_confirm: '确认',
      popover_ask: '你确定要退出吗？',
      // 表格
      edit: '编辑',
      delete: '删除',
      // 显示区域
      showtext: '你好世界',
      // 菜单
      menu_userinfo: '用户信息',
      menu_home: '主页',
      menu_id: '序号',
      menu_name: '姓名',
      menu_age: '年龄',
      menu_birth: '生日',
      menu_img: '头像',
      menu_city: '城市',
      menu_email: '邮箱',
      menu_hobby: '爱好',
      menu_setup: '操作',
      menu_password: '密码',
      menu_system_menu: '用户管理',
      menu_chats_center: '交流中心',
      menu_system_setup: '系统设置',
      // 顶部导航
      nav_langselect: '切换语言',
      nav_light_color: '浅色主题',
      nav_dark_color: '黑暗主题',
      // 登陆
      login_title: '登陆',
      login_remember: '记住密码',
      register_Retrieve: '注册&找回密码',
      login_inputpass: '请输入密码',
      login_noUsername: '请输入用户名',
      login_falsename: '请输入1-12个字的用户名',
      login_falsepass: '只允许6位数的密码哦',
      // 系统设置
      systemset_choosebg: '选择你想要的背景颜色',
      systemset_choosebdbg: '选择你想要的边框颜色',
      systemset_choosetextbg: '选择你想要的文字颜色',
    },
  },
};

const locale = 'zh'; // 创建本地标识，通过修改它来控制全文的语言环境

import { createI18n } from 'vue-i18n'; // 导入createI18n方法

const i18n = createI18n({
  // 使用 Composition API 模式，则需要将其设置为false
  legacy: false,
  // 全局注入 $t 函数
  globalInjection: true,
  locale,
  messages, // 这是定义好的语言表
});

export default i18n; // 导出 i18n
