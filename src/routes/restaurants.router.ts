import express from "express";
import controller from "../controllers/restaurants.contoller";
import Restaurant from '../models/RestaurantsSchema'

const router = express.Router();

router.get('/', controller.restaurants_list);
router.get('/popularRestaurants', controller.popular_restaurants_list);
router.get('/chefRest/:id', controller.chefRest);
router.get('/:id', controller.get_retstaurant);
router.put('/updateRestaurant/:id', controller.update_retstaurant);
router.delete('/deleteRestaurant/:id', controller.delete_retstaurant);
router.post('/addRestaurant', controller.add_retstaurant);


export = router;
