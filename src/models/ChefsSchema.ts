import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let chefSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
})

export default mongoose.model('Chef',chefSchema);