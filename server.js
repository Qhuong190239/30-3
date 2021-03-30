var express = require('express')
var app = express();
var hbs = require('hbs')

app.set('view engine','hbs')

var taiNguyen = require('path').join(__dirname,'/tai_nguyen');
app.use(express.static(taiNguyen));

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }))
app.post('/new',(req,res)=>{
    let name = req.body.txtName;
    res.write('ten ban la: ' + name)
    res.end();
})

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/student',(req,res)=>{
    let students = [{name:"Anh",age:20},{name:"Trang",age:21}]
    res.render('student',{model:students})
})

app.listen(5000);
console.log('Server is running!!!')