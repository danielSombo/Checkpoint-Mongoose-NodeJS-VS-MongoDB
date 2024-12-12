const mongoose = require("mongoose")

const personneSchema = new mongoose.Schema({
    name : {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    favoriteFoods: {
        type: [String],
        require: true
    }
})

const Person = mongoose.model('Person', personneSchema)
module.exports = Person;