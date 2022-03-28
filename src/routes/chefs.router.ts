import express from "express";
import controller from "../controllers/chefs.contoller";

const router = express.Router();
router.get('/', controller.chefs_list);
router.get('/:id', controller.get_chef);
router.put('/updateChef/:id', controller.update_chef);
router.delete('/deleteChef/:id', controller.delete_chef);
router.post('/addChef', controller.add_chef);

export = router;
