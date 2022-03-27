import express from "express";
import controller from "../controllers/chefs.contoller";

const router = express.Router();
router.get('/', controller.chefs_list);
router.get('/:id', controller.get_chef);
router.put('/updateChef/:id', controller.update_chef);
router.delete('/deleteChef/:id', controller.delete_chef);
router.post('/addChef', controller.add_chef);

// router.route("/").get(async (req, resp) => {
//   try {
//     return(controller.chefs_list(req, resp))
//   } catch (err) {
//     console.log(err);
//   }
// });

// router.route("/:id").get(async (req, resp) => {
//   try {
//     return(controller.get_chef(req.params.id, resp))
//   } catch (err) {
//     console.log(err);
//   }
// });

// router.route("/updateChef/:id").put(async (req, resp) => {
//   try {
//     let obj = {
//       name: "Yanir Green",
//       image: "",
//       description: "chef of Tiger Lili",
//       Restaurants: ["622e0bfc33ed58fd4e080812"],
//     };
//     return(controller.update_chef(req.params.id, obj, resp))
//   } catch (err) {
//     console.log(err);
//   }
// });

// router.route("/deleteChef/:id").delete(async (req, resp) => {
//   try {
//     return(controller.delete_chef(req.params.id, resp))
//   } catch (err) {
//     console.log(err);
//   }
// });

// router.route("/addChef").post(async (req, resp) => {
//   try {
//     let obj = {
//       name: "Moshik rot",
//       image: "",
//       description: "chef",
//       Restaurants: [],
//     };
//     return(controller.add_chef(obj, resp))
//   } catch (err) {
//     console.log(err);
//   }
// });

export = router;
