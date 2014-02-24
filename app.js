var express = require('express');
var webot = require('weixin-robot');

var app = express();

// 指定回复消息
webot.set({
  '你好': function() {
    return '我是Linux的主人Tsher,Linux助手正在开发中，敬请关注！';
  },
  'man': '功能正在开发中'
});

webot.set({
  '你是谁': '唐小施',
  '我是谁': '符佳'
});

webot.set('subscribe', {
  pattern: function(info) {
    return info.event === 'subscribe';
  },
  handler: function(info) {
    return '欢迎订阅Linux助手';
  }
});

// 接管消息请求，第二个参数为你在微信后台填写的 token 地址
webot.watch(app, 'linuxhelper');

// 启动 Web 服务
// 微信后台只允许 80 端口
app.listen(3000);
console.log("Server is running on the port 3000");

// 如果你不想让 node 应用直接监听 80 端口
// 可以尝试用 nginx 或 apache 自己做一层 proxy
// app.listen(process.env.PORT);
// app.enable('trust proxy');