import Chef from "../models/ChefsSchema";

const getAllChefs = () => {
  return new Promise((resolve, reject) => {
Chef.find({})
    .populate("Restaurants")
    .exec(function (err, chef) {
      if (err) {
        reject(err);
      } else {
          console.log(chef);
          
        resolve(chef);
      }
    });
  });
};

const getChef = (id) => {
  return new Promise((resolve, reject) => {
    Chef.findById(id)
      // .populate("Restaurants")
      .exec(function (err, chef) {
        if (err) {
          reject(err);
        } else {
          resolve(chef);
        }
      });
  });
};


const updateChef= (id, obj) => {
  return new Promise((resolve, reject) => {
      Chef.findByIdAndUpdate(id, obj)
      .exec(function (err, chef) {
        if (err) {
          reject(err);
        } else {
          resolve(chef);
        }
      });
  })
};

const deleteChef = (id) => {
  return new Promise((resolve, reject) => {
      Chef.findByIdAndRemove(id)
      .exec(function (err, chef) {
        if (err) {
          reject(err);
        } else {
          resolve(chef);
        }
      });
  })
};

const addChef = function (obj) {
  return new Promise((resolve, reject) => {
    let newChef = new Chef({
      name: obj.name,
      image: obj.image,
      description: obj.description,
      Restaurants: obj.restaurants,
    });
    console.log(newChef);
    newChef.save((err) => {
      if (err) {
        reject(err);
      } else {
        resolve(newChef._id);
      }
    });
  });
};

export default { getAllChefs, getChef,updateChef,deleteChef ,addChef };
