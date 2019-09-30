


function htmlUtils(API,instance) {

  let html = {};
  for(let key in API ) {
    let { url, method, corsUrl } = API[key];
    html[key] = async (data, config = {}) => {
    // 跨域处理
    if (corsUrl) {
      url = corsUrl + url
      corsUrl = '';
    }

    let res = null;
    if (method === 'get') {
      const params = Object.assign({}, data, config.params);
      try {
        res = await instance({url, method, params});
        res = Promise.resolve(res);
      } catch (e) {
        res = Promise.reject(e)
      }
    }

    if (method === 'post') {
      try {
        res = await instance({url, method, data:data})
        res = Promise.resolve(res)
      } catch (e) {
        res = Promise.reject(e)
      }
    }

    return res;
    }
  }
  return html
}

export default htmlUtils