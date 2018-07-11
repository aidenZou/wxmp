'use strict';

/**
 * fetch
 */
var fetch = function fetch(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$method = options.method,
      method = _options$method === undefined ? "GET" : _options$method,
      _options$body = options.body,
      body = _options$body === undefined ? {} : _options$body,
      _options$headers = options.headers,
      headers = _options$headers === undefined ? {} : _options$headers;


  return new Promise(function (resolve, reject) {
    wx.request({
      url: url,
      data: body,
      method: method,
      header: headers,
      success: function success(res) {
        resolve({
          data: res.data,
          headers: res.header,
          status: res.statusCode,
          statusText: res.errMsg
        });
      },
      fail: function fail(res) {
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

module.exports = fetch;
