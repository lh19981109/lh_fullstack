# 面试题
- 自我介绍
1. url的渲染过程
    - 首先做 DNS 查询，进行DNS 解析的，会提供访问速度最快的 IP 地址回来
    - 接下来是 TCP 握手
    - TCP 握手结束后会进行 TLS 握手，然后就开始正式的传输数据
    - 数据在进入服务端之前，可能还会先经过负责负载均衡的服务器，它的作用就是将请求合理的分发到多台服务器上，这时假设服务端会响应一个 HTML 文件
    - 浏览器开始解析文件，如果是 gzip 格式的话会先解压一下，然后通过文件的编码格式知道该如何去解码文件
    - 文件解码成功后会正式开始渲染流程，先会根据 HTML 构建 DOM 树，有 CSS 的话会去构建 CSSOM 树。
    - 初始的 HTML 被完全加载和解析后会触发 DOMContentLoaded 事件
    - CSSOM 树和 DOM 树构建完成后会开始生成 Render 树，这一步就是确定页面元素的布局、样式等等诸多方面的东西
    - 在生成 Render 树的过程中，浏览器就开始调用 GPU 绘制，合成图层，将内容显示在屏幕上了
2. 如何实现水平垂直居中
3. 聊聊postion等相关属性和felx布局,
    - static，默认值。位置设置为static的元素，它始终会处于文档流给予的位置。
    - fixed，生成绝对定位的元素。默认情况下，可定位于相对于浏览器窗口的指定坐标。元素的位置通过 “left”, “top”, “right” 以及 “bottom” 属性进行规定
    不论窗口滚动与否，元素都会留在那个位置。但当祖先元素具有transform属性且不为none时，就会相对于祖先元素指定坐标，而不是浏览器窗口。
    - absolute，生成绝对定位的元素，相对于距该元素最近的已定位的祖先元素进行定位。此元素的位置可通过 “left”、”top”、”right” 以及 “bottom” 属性来规定。
    - relative，生成相对定位的元素，相对于该元素在文档中的初始位置进行定位。通过 “left”、”top”、”right” 以及 “bottom” 属性来设置此元素相对于自身位置的偏移。
4. es6的新特性
5. 暂时性死区,引出了const和var
    - let 和 const 声明的变量不存在变量提升，其作用域都是块级作用域，凡是在声明变量之前使用变量就会报错，所以，在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”
6. 谈谈对闭包的理解
7. 对防抖和节流的理解和认识,
8. cookie、sessionstorage和localstorage的区别
9. 谈谈react的生命周期
10. 谈谈redux和hooks
11. git的常见命令以及回滚操作
      - git reset origin/master --soft
12. 谈谈koa和express的区别
13. 谈谈mysql和egg.js
14. 堆排序、冒泡排序、插入排序的实现原理
15. 给组随机数,找出指定数
16. 谈谈垃圾回收机制
    JavaScript 具有自动垃圾收集机制，执行环境会负责管理代码执行过程中使用的内存。
    原理：找出那些不再继续使用的变量，然后释放其占用的内存。为此，垃圾收集器会按照固定的时间间隔（或代码执行中预定的收集时间），周期性地执行这一操作。
    通常有以下两个策略：
    标记清除（最常用）：当变量进入环境（例如，在函 数中声明一个变量）时，就将这个变量标记为“进入环境”。 而当变量离开环境时，则将其 标记为“离开环境。
    过程：
        给存储在内存中的所有变量都加上标记；
        去掉环境中的变量以及被环境中的变量引用的变量的标记；
        之后再被加上标记的变量将被视为准备删除的变量；
        销毁那些带标记的值并回收它们所占用的内存空间。
    引用计数（不常见）：当声明了一个变量并将一个引用类型值赋给该变量时，则这个值的引用次数就加1；如果包含对这个值引用的变量又取得了另外一个值，则这个值的引用次数减1。当这个值的引用次数变成 0时，则说明没有办法再访问这个值了，因而就可以将其占用的内存空间回收回来。
    缺点：有循环引用的问题。
17. 谈谈盒模型以及两者之间是如何转换的
    通过box-sizing自由转换
18. 谈谈对set的认识
    - ES6提供了新的数据结构Set。它类似于数组，但是成员的值都是唯一的，没有重复的值
    - Set 本身是一个构造函数，用来生成 Set 数据结构
    - Set的属性：
        size：返回集合所包含元素的数量
    - Set的方法：
        操作方法
            add(value)：向集合添加一个新的项
            delete(value)：从集合中移除一个值
            has(value)：如果值在集合中存在，返回true,否则false
            clear(): 移除集合里所有的项
        遍历方法
            keys()：返回一个包含集合中所有键的数组
            values()：返回一个包含集合中所有值的数组
            entries：返回一个包含集合中所有键值对的数组(感觉没什么用就不实现了)
            forEach()：用于对集合成员执行某种操作，没有返回值
19. 说说OSI网络分层,分别是哪几层
        从下而上分别是物理层，数据链路层，网络层，运输层，会话层，表示层，应用层
20. TCP和UDP的区别
    - TCP是一个面向连接的、可靠的、基于字节流的传输层协议。
    - 而UDP是一个面向无连接的传输层协议。
21. http、https、TCP、UDP分别在哪个层
    - http在应用层
    - https,UDP,TCP在传输层
22. 谈谈重绘和重排
23. 谈谈事务
    - 事务就是要保证一组数据库操作要么全部成功 要么全部失败。
    - 事务具有四个特性 ACID
        A 原子性  要么全部成功要么全部失败
        C 一致性  确保一个事务执行之前和执行之后必须处于一致的状态
        I 隔离性  一个事务在提交之前是否能够被其他事务可见
        D 持久性  一旦一个事务提交了,那么这个改变就是永久性的
    - 事务隔离具有四种
        读未提交  一个事务还没有提交,其他事务能够看到它做的变更
        读提交 一个事务提交之后,其他事务才能看到变更
        可重复读  一个事务在执行过程中,看到的数据总是跟这个事务在启动时看到的数据一致
        串行化 事务不可并行执行,后访问的事务必须等前一个事务完成,才能继续执行
    - 事务的启动方式
        显示启动事务 begin 启动, commit 提交, rollback 回滚
        程序会自动提交事务
24. 基本数据类型


差不多是这些,还有几个记不起来了,问题不是常见的,
全程没问项目,答出了5成
