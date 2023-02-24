import { createStore } from 'vuex';
import { LANG } from '@/constant';
import { getStore, setStore } from '@/utils/localstore/index';
interface IRootState {
  userInfo: any;
  userAll: any;
  menubg: string;
  textbg: string;
  language: string;
  bordercolor: string;
  curentpath: any;
  userImgSize: number,
}

export default createStore<IRootState>({
  state: () => {
    return {
      userInfo: {},
      userAll: null,
      menubg: '#ffffff',
      textbg: '#111111',
      language: getStore(LANG) || 'zh',
      bordercolor: '#409eff solid 1px',
      curentpath: [],
      userImgSize: 40,
    };
  },
  mutations: {
    changemenubg(state, payload) {
      
      state.menubg = payload;
    },
    changemenutext(state, payload) {
      state.textbg = payload;
    },
    setLanguage(state, payload) {
      setStore(LANG, payload);
      state.language = payload;
    },
  },
});
