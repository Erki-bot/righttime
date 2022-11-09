

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
 //const Appointment = Parse.Object.extend("Appointment");
//  const appointment = new Appointment()
//  appointment.set("name","RDV");
//  appointment.save().then((e)=>{console.log("Save complete : " + e)})
const query = new Parse.Query("Appointment");
const req = async () => {
  return await query.find();
}
const res = req().then((e)=>console.log(e))
//query.find ().then((e)=>console.log(e))
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
