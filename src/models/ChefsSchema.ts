import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let chefSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    Restaurants:[{ type: Schema.Types.ObjectId, ref: "Restaurant" }]
})

export default mongoose.model('Chef',chefSchema);