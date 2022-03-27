import DishHandler from "../handler/dishes.handler";

const handleResponse = (res, data) => res.status(200).send(data);
const handleError = (res, err) => res.status(500).send(err);

const dishes_list = async(req, res)=> {
  DishHandler.getAllDishes()
    .then(data => handleResponse(res, data))
    .catch(err => handleError(res, err));
};

const get_dish = async(req, res)=> {
  DishHandler.getDish(req.params.id)
    .then(data => handleResponse(res, data))
    .catch(err => handleError(res, err));
};

const update_dish = async(req, res)=> {
  DishHandler.updateDish(req.params.id, req.body)
    .then(data => handleResponse(res, data))
    .catch(err => handleError(res, err));
};

const add_dish = async(req, res)=> {
  DishHandler.addDish(req.body)
    .then(data => handleResponse(res, data))
    .catch(err => handleError(res, err));
};

const delete_dish = async(req, res)=> {
  DishHandler.deleteDish(req.params.id)
    .then(data => handleResponse(res, data))
    .catch(err => handleError(res, err));
};

  
  
export default { dishes_list,get_dish,update_dish,add_dish ,delete_dish};