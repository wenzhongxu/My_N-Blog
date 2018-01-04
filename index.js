const path = require('path');
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');
const config = require('config-lite')(__dirname)
const routes = require('./routes');
const pkg = require('./package');

const app = express();

//设置模板目录
app.set('views',path.join(__dirname,'views'));
//设置模板引擎为 ejs
app.set('view engine','ejs');

//设置静态文件目录
app.use(express.static(path.join(__dirname,'public')));
//session 中间件
app.use(session({
	name: config.session.key, //设置 cookie 中保存 session id 的字段名称
	secret: config.session.secret, //通过设置 secret 来计算hash 值并放在cookie 中，使产生的 signedCookie 防篡改
	resave: true, //强制更新 session
	saveUninitialized: false, //设置 false ，强制创建一个session ，即使用户未登录
	cookie:{
		maxAge: config.session.maxAge //过期时间，过期后 cookie 中的 session id 自动删除
	},
	store: new MongoStore({// 将 session 存储到 mongodb
		url: config.mongodb // mongodb 地址
	})
}));

app.use(flash()); //flash 中间件，用来显示通知

//处理表单及文件上传的中间件
app.use(require('express-formidable')({
	uploadDir: path.join(__dirname,'public/img'),//文件上传目录
	keepExtensions: true //保留后缀
}));

//设置模板全局常量
app.locals.blog = {
	title:pkg.name,
	description:pkg.description
};

//添加模板必需的三个变量
app.use(function(req,res,next){
	res.locals.user = req.session.user;
	res.locals.success = req.flash('success').toString();
	next();
});

routes(app); // 路由

// 监听端口，启动程序
app.listen(config.port,function(){
	console.log(`${pkg.name} listening on port ${config.port}`);
});