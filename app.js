var express = require('express');
var todoController = require('./controllers/todoControler');

var app = express();

//set up template 
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controllers
todoController(app);

//listen to port
app.listen(3000);
console.log('Listning to port 3000, http://localhost:3000');