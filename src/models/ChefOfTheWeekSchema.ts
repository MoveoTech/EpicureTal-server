import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let ChefOfTheWeekSchema = new mongoose.Schema({
    ChefId:{ type: Schema.Types.ObjectId, ref: "Chef" }
})

export default mongoose.model('ChefOfTheWeek',ChefOfTheWeekSchema);