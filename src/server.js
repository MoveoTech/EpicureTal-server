const express = require('express');
const apiRouter= require('./routes/api_router/apiRouter.ts');

const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(express.static('public'))
require('./config/config');

app.use('/api', apiRouter)

app.listen(8000, ()=>{
  console.log(`Server running on Port:8000`)
});