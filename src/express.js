var express = require('express');
var morgan = require('morgan');

var app = express();

//静态文件
app.use(express.static('./public'));
app.use(morgan())

app.get('/', function (req, res) {
    res.end('hello\n')
    next();
});

// Router
var Router = express.Router();
/**
 * http://example.com/post/add
 * http://rxample.com/post/list
 */
Router.get('/add', function (req, res) {
    res.end('Router /app\n');
})
Router.get('/list', function (req, res) {
    res.end('Router /list\n');
})

app.use('/post', Router);

//route
app.route('/article')
.get(function(req, res){
    res.end('route /article get\n');
})
.post(function(req, res){
    res.end('route /article post\n');
});

//http://example.com/news/123
app.param('newsId', function(req,res,next,newsId){
    req.newsId = newsId;
    next();
});

app.get('/news/:newsId', function(req,res){
    res.end('newsId' + req.newsId + '\n')
})

app.listen(18000, function afterListen() {
    console.log('express runn on http://localhost:18000')
})