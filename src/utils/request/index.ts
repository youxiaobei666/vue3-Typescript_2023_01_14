import axios from 'axios';
import store from '@/store';
import { setStore } from '@/utils/localstore/index';

const Request = (payload: string) => {
  axios({
    method: 'GET',
    url: 'http://youxiaobei.top:1224',
  }).then((res) => {
    store.state.userInfo = res.data; // 把所有用户数据存储至vuex
    store.state.userAll = res.data; // 备份
  });
};

export default Request;
