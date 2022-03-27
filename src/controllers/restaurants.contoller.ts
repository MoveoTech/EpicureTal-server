import RestaurantHandler from "../handler/restaurants.handler";

const handleResponse = (res, data) => res.status(200).send(data);
const handleError = (res, err) => res.status(500).send(err);

const restaurants_list = async(req, res)=> {
  RestaurantHandler.getAllRestaurants()
    .then(data => handleResponse(res, data))
    .catch(err => handleError(res, err));
};

const popular_restaurants_list = async(req, res)=> {
  RestaurantHandler.getAllPopularRestaurants()
    .then(data => handleResponse(res, data))
    .catch(err => handleError(res, err));
};

const chefRest = async(req, res)=> {
  RestaurantHandler.getAllChefRestaurants(req.params.id)
    .then(data => handleResponse(res, data))
    .catch(err => handleError(res, err));
};

const get_retstaurant = async(req, res)=> {
  RestaurantHandler.getRestaurant(req.params.id)
    .then(data => handleResponse(res, data))
    .catch(err => handleError(res, err));
};

const update_retstaurant = async(req, res)=> {
  console.log("update:",req.body)
  RestaurantHandler.updateRestaurant(req.params.id,req.body)
    .then(data => handleResponse(res, data))
    .catch(err => handleError(res, err));
};

const add_retstaurant = async(req, res)=> {
  console.log(req.body)
  RestaurantHandler.addRestaurant(req.body)
    .then(data => handleResponse(res, data))
    .catch(err => handleError(res, err));
};

const delete_retstaurant = async(req, res)=> {
  RestaurantHandler.deleteRestaurant(req.params.id)
    .then(data => handleResponse(res, data))
    .catch(err => handleError(res, err));
};

 export default { restaurants_list ,popular_restaurants_list, chefRest,get_retstaurant, update_retstaurant, add_retstaurant, delete_retstaurant};