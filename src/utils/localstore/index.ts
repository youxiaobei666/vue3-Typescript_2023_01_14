const getStore = function (payload: string) {
  let data : any  = localStorage.getItem(payload);
  data = JSON.parse(data)
  return data;
};

const setStore = function (key: string, payload: any) {
  payload = JSON.stringify(payload); // 转字符串
  localStorage.setItem(key, payload);
};

export { getStore, setStore };
