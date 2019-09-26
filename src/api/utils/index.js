


function htmlUtils(API,instance) {
  let html = {};
  for(let key in API ) {
    const { url, method } = API[key];
    html[key] = async (data, config = {}) => {


      const res = await instance({url,method,data})
      return res
    }
  }
  return html
}

export default htmlUtils