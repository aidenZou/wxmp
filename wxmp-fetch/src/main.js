/**
 * fetch
 */
const fetch = function(url, options = {}) {
  const { method = "GET", body = {}, headers = {} } = options;

  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: body,
      method,
      header: headers,
      success: res => {
        resolve({
          data: res.data,
          headers: res.header,
          status: res.statusCode,
          statusText: res.errMsg
        });
      },
      fail: res => {
        reject({
          data: res.data,
          headers: res.header,
          status: res.statusCode,
          statusText: res.errMsg
        });
      }
    });
  });
};

export default fetch;
