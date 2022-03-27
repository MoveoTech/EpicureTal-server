import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let RestaurantsSchema = new mongoose.Schema({
    name: String,
    image: String,
    isPopular: Boolean,
    Chef: { type: Schema.Types.ObjectId, ref: "Chef" },
    signatureDish: { type: Schema.Types.ObjectId, ref: "Dish" }
})

export default mongoose.model('Restaurant',RestaurantsSchema);

