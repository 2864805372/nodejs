1. 阶段1复习

   1. 区块链

      1. 比特币
      2. 以太坊
      3. EOS
      4. 超级账本

   2. golang公链实战

      1. 区块与链结构(基本概念)
      2. 共识算法(POW)
      3. 持久化-boltdb
         1. 序列化与序列化
         2. 迭代器
      4. 命令行
         1. flag与os
      5. 交易
         1. 区块交易与传统
         2. 特性
         3. 交易过程
         4. 输入与输出-->utxo(unspend transaction output)
         5. 查找UTXO
      6. 地址
         1. 比特币地址特点
         2. 地址生成
            1. 随机数->私钥->公钥->公钥哈希->字节数组->比特币地址
            2. 椭圆加密
            3. base64和base58
         3. 钱包
            1. 特点:公钥-私钥对
         4. 钱包集合
      7. 交易签名
         1. 在哪签名
         2. 在哪确认
         3. 哪些数据需要签名
         4. 私钥签名公钥验证
      8. Merkle树实现(二叉树实现)
         1. 交易是如何存储在merkle树之中
      9. utxo查找优化
         1. 由遍历区块链数据表修改为遍历utxo数据表
      10. 网络
          1. 设置不同节点试:port
          2. 实现网络服务
          3. p2p网络特点：每个节点既是服务端，又是客户端

   3. nodejs

      1. nodejs是什么

         1. nodejs就是运行在服务端的javascript
         2. 基于chrome javascript运行时建立的一个平台

      2. 特点

         1. 性能好，速度快
         2. nodejs采用异步I/O与事件驱动设计

      3. nodjs功能(作用)

         1. js是专门用于客户端，node.js主要用于服务端
         2. 可以开发出高性能的web应用
         3. 支持命令行
         4. 支持交互式终端

      4. nodejs采用的是google的V8引擎

      5. nodejs安装

         1. 官网地址：https://nodejs.org/en/download/
         2. 查看安装结果：node -v
         3. 进入控制台：node
         4. 退出：按两次ctrl+c或者.exit
         5. linux安装node.js需要安装python2.7

      6. hello world

      7. IDE

      8. 创建nodejs应用实例

      9. 基本使用

         1. npm 使用介绍

            1. npm是和nodejs一起安装的一个包管理工具，主要是对nodejs的模块进行管理
               1. 允许用户从npm服务器下载第三方包使用
               2. 允许用户将自己编写的包上传到npm服务器供别人下载使用
            2. 查看npm版本
               1. npm -v
            3. 安装模块
               1. 本地安装：npm install <module name>
               2. 全局安装：npm install <module name> -g
            4. 查看安装信息
               1. npm list -g
            5. 查看模块相关信息：通过指定模块路径下的package.json
            6. 卸载模块：npm uninstall <module name> 

         2. cnpm：为了国内开发者更加方便的获取需要的模块使用产生的一个淘宝npm镜像

            1. 仓库地址：http://registry.npm.taobao.org
            2. 安装：npm install -g cnpm --registry=http://registry.npm.taobao.org
            3. 使用cnpm安装：cnpm install <module name>
            4. 卸载: cnpm uninstall <module name>

         3. node.js REPL

            1. nodejs自带REPL,可以在终端中输入命令，并接收系统的响应
               1. 读取：读取用户输入，解析输入的js数据结构，存储在内存中
               2. 执行：执行输入的数据结构
               3. 打印：输出结果
               4. 循环：循环操作以上步骤，直到用户主动退出
            2. 使用
               1. 可以在解释中写入变量
               2. 可以进行运算
               3. 编写多选表达式
               4. 在交互式终端中，下划线(_)可以得到上一个表达式的运算结果
            3. REPL命令
               1. ctrl+c/.exit/ctrl+d：退出REPL
               2. tab键：列出当前使用命令
               3. .help:列表REPL使用命令
               4. .save filename：保存当前的ndoe REPL会话到指定文件
               5. .load filename：载入当前的Node REPL文件内容

         4. node.js变量声明

            1. var
            2. let（es6新增变量声明方式），注意let声明的变量只在let命令所在的代码块内有效
            3. 另外 let 不允许在同一个作用域内对同一个变量重复声明 

         5. nodejs函数

            1. 在nodejs中，函数可以作为另一个函数的参数
            2. 可以先定义一个函数进行传递，或者在传递参数的地方直接定义函数
            3. 可以使用箭头函数

         6. nodejs回调函数

            1. Nodejs异步编程最直接的体现就是回调
            2. nodejs中所有函数都支持回调
            3. 通过回调函数可以提高nodejs的性能，处理高并发请求
            4. 回调函数一般作为最后一个参数出现

         7. 异常处理

            1. 在通常情况下，node在回调函数中对error进行处理

            2. 方式

               1. try-catch方式

               2. ```js
                  try{...}catch{...}
                  // try catch异常捕获方式，不能处理异步代码块内出现的异常
                  // 有可能在catch执行时，异常还没有发生
                  ```

               3. call back方式

               4. event方式

               5. promise方式

         8. nodejs事件

            1. nodejs是一个单线程，单进程应用程序
            2. nodejs主要使用事件驱动模型，当web server接收到请求，进行处理
            3. EventEmitter：事件监听，每个事件由一个事件名和若干个参数组成 