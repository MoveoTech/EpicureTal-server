const express = require('express');
import restaurantRoutes from './routes/restaurants.router'
import chefsRoutes from './routes/chefs.router'
import dishesRoutes from './routes/dishes.router'
const apiRouter= require ('./routes/api_router/apiRouter');

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