import express from "express";
import controller from "../controllers/chefOfTheWeek.contoller";

const router = express.Router();

router.get('/', controller.ChefsOfTheWeek_list);
router.get('/:id', controller.get_chef);
router.put('/updateWeekChef/:id', controller.update_chef);
router.delete('/deleteWeekChef/:id', controller.delete_chef);
router.post('/addWeekChef', controller.add_chef);


export = router;
