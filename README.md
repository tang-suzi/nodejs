# Node.js

    主要应用领域
        RESTFul API
        实时通信:如消息推送等
        高并发
        I/O阻塞

## Node.js的特点

    部署简单方便
        环境配置简单 只需要安装Node.js即可
        注重约定
        项目所需要扩展、插件、资源相对独立 不易冲突
    事件驱动
        主要观点: 根据当前出现的事件 调动资源进行相关的处理
    异步编程
        异步的实现方式
            回调函数
            事件监听
            订阅/发布
    高效与性能
        单个操作的性能并不优于其他解决方案
        通过优化资源调配和I/O操作来实现高效
    单线程与多线程
        Google V8是单线程的 所以Node.js与同样是单进程的 为了更好的利用CPU资源 可以利用子进程和多进程
        子进程: Node.js和child_process模块
        多进程: PM2等第三方工具

    Node.js的缺点
        大量采用匿名函数 使得跑出的异常不易阅读
        try/catch限于同步代码 使得异常捕获较为复杂
        单线程: 可靠性
        不适合CPU密集型的场景
        回调的代码习惯影响阅读

## Node.js 开发环境

    执行环境
        Google V8
        文件系统
        网络功能(HTTP/TCP/UDP/DNS/TLS/SSL)
        二进制数据
        数据流
        加密与解密

## 创建web服务器和TCP服务器

    使用HTTP模块创建Web服务器
        Web服务器的功能
            接收HTTP请求(GET、POST、DELETE、PUT、PATCH)
            处理HTTP请求(自己处理 或请求别的程序处理)
            做出响应(返回页面、文件、各类数据等)
        常见的Web服务器架构
            Nginx/Apache: 负责接受HTTP请求 确定谁来处理请求 并返回请求的结果
            php-fpm/php模块: 处理分配给自己的请求 并将处理结果返回给分配者
        常见请求种类
            请求文件: 包括静态文件(网页、图片、前端javascript文件、css文件……)以及由程序处理得到的文件
            完成特定的操作: 如登陆、获取特定数据等
        Node.js的Web服务器
            不依赖其他特定的Web服务器软件(如Apache、Nginx、IIS……)
            Node.js代码处理请求的逻辑
            Node.js代码负责Web服务器的各种“配置”
    使用Node.js核心模块HTTP创建Web服务器
    web.js