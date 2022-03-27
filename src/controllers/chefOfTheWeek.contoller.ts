import CheffTheWeekHandler from "../handler/chefOfTheWeek.handler";

const handleResponse = (res, data) => res.status(200).send(data);
const handleError = (res, err) => res.status(500).send(err);


const ChefsOfTheWeek_list = async(req, res)=> {
  CheffTheWeekHandler.getAllChefsOfTheWeek()
    .then(data => handleResponse(res, data))
    .catch(err => handleError(res, err));
};


const get_chef = async(req, res)=> {
  CheffTheWeekHandler.getChef(req.params.id)
    .then(data => handleResponse(res, data))
    .catch(err => handleError(res, err));
};

const update_chef= async(req, res)=> {
  CheffTheWeekHandler.updateChef(req.params.id, req.body)
    .then(data => handleResponse(res, data))
    .catch(err => handleError(res, err));
};

const add_chef = async(req, res)=> {
  CheffTheWeekHandler.addChef(req.body)
    .then(data => handleResponse(res, data))
    .catch(err => handleError(res, err));
};

const delete_chef = async(req, res)=> {
  CheffTheWeekHandler.deleteChef(req.params.id)
    .then(data => handleResponse(res, data))
    .catch(err => handleError(res, err));
};

export default { ChefsOfTheWeek_list, get_chef,update_chef,add_chef ,delete_chef };