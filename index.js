const express = require('express')
const app = express()

//如果将路由都放在启动文件里，index.js既臃肿也不好维护
//创建routes文件夹，使用express.Router解决方案实现
/*
app.get('/',function(req,res){
	res.send('hello,express')
})

app.get('/users/:name',function(req,res){
	res.send('hello,' + req.params.name)
})
*/

const indexRouter = require('./routes/index')
const userRouter = require('./routes/users')

app.use('/',indexRouter)
app.use('/users',userRouter)

app.listen(3000)