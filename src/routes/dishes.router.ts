import express from "express";
import controller from "../controllers/dishes.contoller";

const router = express.Router();
router.get('/', controller.dishes_list);
router.get('/:id', controller.get_dish);
router.put('/updateDish/:id', controller.update_dish);
router.delete('/deleteDish/:id', controller.delete_dish);
router.post('/addDish', controller.add_dish);

// router.route("/").get(async (req, resp) => {
//   try {
//     return(controller.dishes_list(req, resp))
//   } catch (err) {
//     console.log(err);
//   }
// });

// router.route("/:id").get(async (req, resp) => {
//   try {
//     return(controller.get_dish(req.params.id, resp))
//   } catch (err) {
//     console.log(err);
//   }
// });

// router.route("/updateDish/:id").put(async (req, resp) => {
//   try {
//     let obj = {
//       name: "Smoked Pizza",
//       price: 75,
//       ingredients: `Basil dough, cashew "butter", demi-glace, bison & radish`,
//       tags: ["spicy", "Vegan", "vegetarian"],
//       image: "",
//     };
//     return(controller.update_dish(req.params.id, obj, resp))
//   } catch (err) {
//     console.log(err);
//   }
// });

// router.route("/deleteDish/:id").delete(async (req, resp) => {
//   try {
//     return(controller.delete_dish(req.params.id, resp))
//   } catch (err) {
//     console.log(err);
//   }
// });

// router.route("/addDish").post(async (req, resp) => {
//   try {
//     let obj = {
//       name: "Rice",
//       price: 35,
//       ingredients: `Basil dough, oil, garilc`,
//       tags: ["Vegan"],
//       image: "",
//     };
//     return(controller.add_dish(obj, resp))
//   } catch (err) {
//     console.log(err);
//   }
// });

export = router;
