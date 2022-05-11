const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const usersController = require('./usersController')
const favsController = require('./favsController')
const cors=require("cors");
const bodyParser = require('body-parser')

const corsOptions ={
   origin:'*', 
   credentials:true,            
   optionSuccessStatus:200,
}
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())



app.get('/', (req,res) => {
  res.send('Hello, server here!')
})

app.post('/favs',favsController.getFavs, (req,res)=> {
  res.json(res.locals.favs)
})

app.post('/users', usersController.authenticateUser, (req,res) => {
  res.json(res.locals.users)
})

// app.get('/', usersController.getUsers, (req, res) => {
  //   console.log('res', res.locals)
  //   res.json(res.locals.users);
  // } )

app.listen(PORT, () => console.log(`Listening on ${PORT}`) )