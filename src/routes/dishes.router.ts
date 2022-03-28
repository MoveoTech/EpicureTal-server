import express from "express";
import controller from "../controllers/dishes.contoller";

const router = express.Router();
router.get('/', controller.dishes_list);
router.get('/:id', controller.get_dish);
router.put('/updateDish/:id', controller.update_dish);
router.delete('/deleteDish/:id', controller.delete_dish);
router.post('/addDish', controller.add_dish);

export = router;
