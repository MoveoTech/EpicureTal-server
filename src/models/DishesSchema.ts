import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let DishesSchema = new mongoose.Schema({
    name: String,
    price: Number,
    ingredients: String,
    tags: [],
    image: String
    // Restaurant:{ type: Schema.Types.ObjectId, ref: "Restaurant" }
})

export default mongoose.model('Dish',DishesSchema);