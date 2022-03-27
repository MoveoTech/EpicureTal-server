import ChefHandler from "../handler/chefs.handler";

const handleResponse = (res, data) => res.status(200).send(data);
const handleError = (res, err) => res.status(500).send(err);

const chefs_list = async(req, res)=> {
  ChefHandler.getAllChefs()
    .then(data => handleResponse(res, data))
    .catch(err => handleError(res, err));
};

const get_chef = async(req, res)=> {
  ChefHandler.getChef(req.params.id)
    .then(data => handleResponse(res, data))
    .catch(err => handleError(res, err));
};

const update_chef= async(req, res)=> {
  ChefHandler.updateChef(req.params.id, req.body)
    .then(data => handleResponse(res, data))
    .catch(err => handleError(res, err));
};

const add_chef = async(req, res)=> {
  ChefHandler.addChef(req.body)
    .then(data => handleResponse(res, data))
    .catch(err => handleError(res, err));
};

const delete_chef = async(req, res)=> {
  ChefHandler.deleteChef(req.params.id)
    .then(data => handleResponse(res, data))
    .catch(err => handleError(res, err));
};

export default { chefs_list, get_chef,update_chef,add_chef ,delete_chef };
