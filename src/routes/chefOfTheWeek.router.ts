import express from "express";
import controller from "../controllers/chefOfTheWeek.contoller";

const router = express.Router();

router.get('/', controller.ChefsOfTheWeek_list);
router.get('/:id', controller.get_chef);
router.put('/updateWeekChef/:id', controller.update_chef);
router.delete('/deleteWeekChef/:id', controller.delete_chef);
router.post('/addWeekChef', controller.add_chef);


// router.route("/").get(async (req, resp) => {
//   try {
//     return(controller.ChefsOfTheWeek_list(req, resp))
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
//     let newChef = "622f17fd33ed58fd4e080888";
//     return(controller.update_chef(req.params.id,newChef, resp))
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
//       ChefId: "622f176633ed58fd4e08087f",
//     };
//     return(controller.add_chef(obj, resp))
//   } catch (err) {
//     console.log(err);
//   }
// });

export = router;
