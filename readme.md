# 上传xxx项目到github仓库

+ 上传的包内容简介

### sk电商网站进销存管理系统

+ 项目内容: xxxxxxxxxxxxxxxx
+ 项目开发者: sk
+ 开发时间: 2020-05-16

### 开发流程简介

+ 市场调研
+ 产品分析
+ 设计方案
+ 组织开发
+ 测试审计
+ 项目运行
+ 项目维护

> # [解决无法访问 Github](https://www.cnblogs.com/yanch01/p/GitHub-access.html)
>
> 可以正常使用Google，但无法打开Github。
>
> 打开“运行”对话框（可以直接使用Win+R组合快捷键，快速打开），然后键入hosts文件路径：C:\WINDOWS\system32\drivers\etc 完成后，点击下方的“确定”打开
>
> + 清理dns缓存，win+r，输入‘cmd’，再输入ipconfig/flushdns
>
> 查阅了一些资料，发现需要在hosts文件中添加映射。
> 在hosts文件中加入两行
>
> ![图片名称](https://img2018.cnblogs.com/blog/1930129/202002/1930129-20200202200459426-484046283.png)
>
> 140.82.113.4 github.com
> 140.82.113.4 www.github.com
>
> 其中的ip地址是在 https://github.com.ipaddress.com/www.github.com 中查询的
>
> ![图片名称](https://img2018.cnblogs.com/blog/1930129/202002/1930129-20200202200622287-1611772241.png)
>
> 看很多博客介绍此时应该就可以正常访问了，但我还是无法访问，发现可能是安全证书的问题
>
> 打开 http://tool.chinaz.com/dns
> 查询 github.global.ssl.fastly.net 和 assets-cdn.github.com 两个地址， 选取TTL值低的ip地址
> 把这两行写入hosts文件，就可以正常访问了
>
> ![图片名称](https://img2018.cnblogs.com/blog/1930129/202002/1930129-20200202201430299-1757381190.png)
>
> 69.171.224.40 github.global.ssl.fastly.net
> 185.199.111.153 assets-cdn.github.com
> 140.82.113.4 github.com
> 140.82.113.4 www.github.com

