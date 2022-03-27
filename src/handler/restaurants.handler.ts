import Restaurant from "../models/RestaurantsSchema";

const getAllRestaurants = () => {
    return new Promise((resolve, reject) => {
        Restaurant.find({})
        .populate("Chef").populate("signatureDish")
        .exec(function (err, rest) {
          if (err) {
            reject(err);
          } else {
            resolve(rest);
            console.log(rest)
          }
        });
    })
};

const getAllPopularRestaurants = () => {
  return new Promise((resolve, reject) => {
      Restaurant.find({isPopular:true})
      .populate("Chef").populate("signatureDish")
      .exec(function (err, rest) {
        if (err) {
          reject(err);
        } else {
          resolve(rest);
        }
      });
  })
};

const getAllChefRestaurants=(id)=>{
  return new Promise((resolve, reject) => {
    Restaurant.find({Chef:id})
    .exec(function (err, rest) {
      if (err) {
        reject(err);
      } else {
        resolve(rest);
      }
    });
})
}

const getRestaurant = (id) => {
    return new Promise((resolve, reject) => {
        Restaurant.findById(id)
        .populate("Chef").populate("signatureDish")
        .exec(function (err, rest) {
          if (err) {
            reject(err);
          } else {
            resolve(rest);
          }
        });
    })
};

const updateRestaurant = (id, obj) => {
    return new Promise((resolve, reject) => {
        Restaurant.findByIdAndUpdate(id, obj)
        .exec(function (err, rest) {
          if (err) {
            reject(err);
          } else {
            console.log(rest)
            resolve(rest);
          }
        });
    })
};

const deleteRestaurant = (id) => {
    return new Promise((resolve, reject) => {
        Restaurant.findByIdAndRemove(id)
        .exec(function (err, rest) {
          if (err) {
            reject(err);
          } else {
            resolve(rest);
          }
        });
    })
};

const addRestaurant = function (obj) {
  console.log(obj)
    return new Promise((resolve, reject) => {
      let newRest = new Restaurant({
        name: obj.name,
        image: obj.image,
        isPopular:obj.isPopular==="false"? false: true,
        Chef: obj.Chef,
        signatureDish: obj.signatureDish
    });

    newRest.save(err => {
            if (err) {
                reject(err);
            }
            else {
                resolve(obj._id);
            
            }
        })
    })
}

export default { getAllRestaurants,getAllPopularRestaurants,getAllChefRestaurants,getRestaurant,updateRestaurant,deleteRestaurant, addRestaurant };