const express = require('express');
const router = require('./config/route');

const app = express();
app.use(express.urlencoded({extended: false}))


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());


/*app.use(express.static(__dirname + '/feed'));*/
app.use(router);


require('./config/mongoose')

app.listen('3000', () => {
  
})