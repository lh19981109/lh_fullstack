1. http和https的区别
    - http明文传输 基于应用层 端口80
    - https基于SSL安全协议,需要认证  基于传输层  端口443  HTTPS性能低于HTTP
2. http1.0 /1.1 /2.0的区别
    - http1.0 短连接
    - http1.1 长连接
    - http2.0 二进制传输
    1. http/https 协议

    1.0 协议缺陷:
    无法复用链接，完成即断开，重新慢启动和 TCP 3次握手 head of line blocking: 线头阻塞，导致请求之间互相影响

    1.1 改进:

    长连接(默认 keep-alive)，复用  加入host 字段指定对应的虚拟站点
    新增功能: 断点续传  身份认证 状态管理
    cache 加入了缓存机制 

    Cache-Control  Expires  Last-Modified  Etag

    2.0:
    多路复用  二进制分帧层: 应用层和传输层之间  首部压缩   服务端推送

    https: 较为安全的网络传输协议   证书(公钥)  SSL 加密  端口 443

3. http获取请求有哪些方式
4. get 和post有哪些区别
    - get: 缓存、请求长度受限、会被历史保存记录 无副作用(不修改资源)，幂等(请求次数与资源无关)的场景
    - post: 安全、大数据、更多编码类型(更安全) 
5. get和post的底层有什么不通


6. url的渲染过程
    - 首先拿到url之后,进行DNS解析,拿到域名
    - 接着TCP建立连接
    - html进行传输
    - http2.0线路复用
    - 由此进入浏览器渲染

7. 浏览器渲染
    - 解析HTML,变成DOM树
    - 解析css,样式树,合成渲染树
    - layout布局,生成网页布局


浏览器架构
用户界面
主进程
内核
  - 渲染引擎
  - JS 引擎
    - 执行栈
  - 事件触发线程
    - 消息队列
      - 微任务
      - 宏任务
  - 网络异步线程
  - 定时器线程

- HTTPS通信过程
    1. 请求HTTPS连接
    2. 服务端返回证书(公钥)
    3. 客户端验证证书有效性
    4. 客户端生成一个随机密钥用于对称加密
    5. 用公钥加密对称密钥传输给服务端
    6. 服务端用私钥解密,得到对称密钥‘
    7. 服务端和客户端通过对称密钥加密的密文通信