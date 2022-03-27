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

// router.route("/").get(controller.restaurants_list(])) ;
// => {
//   try {
//     return(controller.restaurants_list(req, resp))
//   } catch (err) {
//     console.log(err);
//   }
// });

// router.route("/popularRestaurants").get(async (req, resp) => {
//   try {
//     return(controller.popular_restaurants_list(req, resp))
//   } catch (err) {
//     console.log(err);
//   }
// });

// router.route("/:id").get(async (req, resp) => {
//   try {
//     return(controller.get_retstaurant(req.params.id, resp))
//   } catch (err) {
//     console.log(err);
//   }
// });

// router.route("/updateRestaurant/:id").put(async (req, resp) => {
//   try {
//     let obj = {
//       name: "Claro",
//       image: "/img/claro.jpg",
//       isPopular: false,
//       // Chef: "622f01cc33ed58fd4e08084f",
//       // signatureDish: "622ee9eed7851fe0c2574c16",
//     };
//     return(controller.update_retstaurant(req.params.id, obj, resp))
//   } catch (err) {
//     console.log(err);
//   }
// });

// router.route("/deleteRestaurant/:id").delete(async (req, resp) => {
//   try {
//     return(controller.delete_retstaurant(req.params.id, resp))
//   } catch (err) {
//     console.log(err);
//   }
// });

// router.route("/addRestaurant").post(async (req, resp) => {
//   try {
//     let obj = new Restaurant({
//       name: "Popina",
//       image: "",
//       isPopular: false,
//       Chef: "622f185733ed58fd4e080899",
//       signatureDish: "622ee9eed7851fe0c2574c16",
//     });
//     return(controller.add_retstaurant(obj, resp))
//   } catch (err) {
//     return err;
//   }
// });

export = router;
