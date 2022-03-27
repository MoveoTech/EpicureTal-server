import Dish from "../models/DishesSchema";

const getAllDishes = () => {
    return new Promise((resolve, reject) => {
    Dish.find({})
    // .populate("Restaurant")
    .exec(function (err, chef) {
      if (err) {
        reject(err);
      } else {
          console.log(chef);
          
        resolve(chef);
      }
    });
    })
};

const getDish = (id) => {
    return new Promise((resolve, reject) => {
      Dish.findById(id)
        // .populate("Restaurants")
        .exec(function (err, dish) {
          if (err) {
            reject(err);
          } else {
            resolve(dish);
          }
        });
    });
  };
  
  
  const updateDish= (id, obj) => {
    return new Promise((resolve, reject) => {
        Dish.findByIdAndUpdate(id, obj)
        .exec(function (err, dish) {
          if (err) {
            reject(err);
          } else {
            resolve(dish);
          }
        });
    })
  };
  
  const deleteDish = (id) => {
    return new Promise((resolve, reject) => {
        Dish.findByIdAndRemove(id)
        .exec(function (err, dish) {
          if (err) {
            reject(err);
          } else {
            resolve(dish);
          }
        });
    })
  };
  

const addDish = function (obj) {
    return new Promise((resolve, reject) => {
        let newDish = new Dish({
            name: obj.name,
            price: obj.price,
            ingredients: obj.ingredients,
            tags: obj.tags,
            image: obj.image
            // Restaurant:obj.Restaurant
        });
        console.log(newDish)
        newDish.save(err => {
            if (err) {
                reject(err);
            }
            else {
                resolve(newDish._id);
            }
        })
    })
}

export default { getAllDishes,getDish,updateDish,deleteDish ,addDish};