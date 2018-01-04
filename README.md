# My_N-Blog
A blog program by nodejs
参照 https://github.com/nswbmw/N-blog 学习编写
个人学习所用

对应文件夹和文件的用处：
    1、models: 存放操作数据库的文件
    2、public: 存放静态文件，如样式、图片等
    3、routes: 存放路由文件
    4、views: 存放模板文件
    5、index.js: 程序主文件
    6、package.json: 存储项目名、描述、作者、依赖等等信息

 对应模块的用处：
 	1、express: web 框架
	2、express-session: session 中间件
	3、connect-mongo: 将 session 存储于 mongodb，结合 express-session 使用
	4、connect-flash: 页面通知的中间件，基于 session 实现
	5、ejs: 模板
	6、express-formidable: 接收表单及文件上传的中间件
	7、config-lite: 读取配置文件
	8、marked: markdown 解析
	9、moment: 时间格式化
	10、mongolass: mongodb 驱动
	11、objectid-to-timestamp: 根据 ObjectId 生成时间戳
	12、sha1: sha1 加密，用于密码加密
	13、winston: 日志
	14、express-winston: express 的 winston 日志中间件

