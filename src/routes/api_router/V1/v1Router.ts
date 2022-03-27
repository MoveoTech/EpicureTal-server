const express = require('express');

const v1_Router = express.Router();
import restaurantRouter from '../../restaurants.router'
import chefRouter from '../../chefs.router'
import chefOfTheWeek from '../../chefOfTheWeek.router'
import dishesRouter from '../../dishes.router'

v1_Router.use('/restaurants', restaurantRouter);
v1_Router.use('/chefs', chefRouter);
v1_Router.use('/chefOfTheWeek', chefOfTheWeek);
v1_Router.use('/dishes', dishesRouter);

export= v1_Router;
