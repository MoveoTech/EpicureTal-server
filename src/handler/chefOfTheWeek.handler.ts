import Chef from "../models/ChefOfTheWeekSchema";

const getAllChefsOfTheWeek = () => {
  return new Promise((resolve, reject) => {
Chef.find({}).populate("ChefId")
// .populate({
//   path : 'ChefId',
//   populate : {
//     path : 'Restaurants'
//   }
// })
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
    Chef.findById(id) .populate("ChefId").populate({
      path : 'ChefId',
      populate : {
        path : 'Restaurants'
      }
    })
      .exec(function (err, chef) {
        if (err) {
          reject(err);
        } else {
          resolve(chef);
        }
      });
  });
};


const updateChef= (id, newChef) => {
  return new Promise((resolve, reject) => {
      Chef.findByIdAndUpdate(id, {ChefId: newChef.ChefId._id })
      .exec(function (err, chef) {
        if (err) {
          reject(err);
        } else {
          console.log(chef)
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
      ChefId: obj.ChefId
    });
    newChef.save((err) => {
      if (err) {
        reject(err);
      } else {
        resolve(newChef._id);
      }
    });
  });
};

export default { getAllChefsOfTheWeek, getChef,updateChef,deleteChef ,addChef };
