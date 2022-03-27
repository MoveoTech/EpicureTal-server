const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EpicureDB');

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to db"));