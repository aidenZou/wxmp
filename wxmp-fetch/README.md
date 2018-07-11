# @hfe/wx-fetch

## 事例

```
fetch(url, {
  body,
  method,
  headers: {
    "content-type": "application/json"
  }
}).then(response => {
  const { data, headers, status, statusText } = response;
});
```

## 差异：

### response 不需要 `response.json()`

1. 小程序中没有 Response对象
2. 性能
