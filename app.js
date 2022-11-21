

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ParseServer = require('parse-server').ParseServer;
var ParseDashboard = require ('parse-dashboard');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var Parse = require ('parse/node');
const Appointment = require('./class/appointment');
const test = require('./functions/test');
/******************************************************* 
 * 
 * Clés de configutaion
 * 
 * *****************************************************/
const masterKey = 'zeiuyfguzygferyfzyu';
const appId = "iuzefefdhoezfubdi";
const jsKey = 'erki-jsKey';
const serverUrl = 'http://localhost:3000/api';
const databaseURI = 'mongodb://localhost:27017/test'
const appName = 'ErkiApp'
const serverConfig = {
  databaseURI : databaseURI,
  appId : appId,
  cloud : './cloud/main.js',
  javascriptKey : jsKey,
  masterKey : masterKey,
  serverURL : serverUrl,
  appName : appName
}
var app = express();
/******************************************************* 
 * 
 * Parse server
 * 
 * *****************************************************/
const api = new ParseServer(serverConfig)


/******************************************************* 
 * 
 * Parse dashboard
 * 
 * *****************************************************/
const dashboardConfig = {
  apps: [
    {
      serverURL: serverUrl,
      appId: appId,
      masterKey: masterKey,
      appName: appName
    }
  ]
}
 var dashboard = new ParseDashboard(dashboardConfig);
 Parse.initialize("iuzefefdhoezfubdi",'erki-jsKey',"zeiuyfguzygferyfzyu");
 Parse.serverURL = 'http://localhost:3000/api';



//dropClass("Service");

console.clear();
async function getServiceList (){
  const query = new Parse.Query("Service");
  const res = await query.find()
  const serviceList = res
  .map(async (s)=>{
    let returnValue = s
    const category = returnValue.attributes.category;
    let categoryName = null;
 
    try {
    let categoryId = category.id;
      const query2 = new Parse.Query('Category');
      await query2.get(categoryId)
      .then((cat) => {
        categoryName = cat.get('name');
      })
    }
   catch{
    
   }   
    returnValue = {...returnValue,categoryName : categoryName}
    console.log(returnValue)
  })
}
/*
const x = async () => await Parse.Cloud.run('serviceGetAll',{});
console.log("######################################")
x().then((s)=>{
  for(i of s)
  {try {
    console.log(i.attributes.category.attributes)
  } catch (error) {
    
  }}})
*/
test();
const q = new Parse.Query("Service");
q.first().then((s)=>{
  const category = s.attributes.category;
  new Parse.Query('Category').get(category?.id).catch(console.log)
  //.then(cat => console.log(cat.get('name')))
})
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use("/api",api)
app.use("/dash",dashboard);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
