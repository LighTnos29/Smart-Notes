const mongoose = require('mongoose')

const notesSchema = mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId , required: true , ref: "user"},
    title: {type: String , required: true},
    content: {type: String , required: true},
    summary: {type: String , required: true},
    category: {type: String },
    createdAt: {type: Date , default: Date.now},
})

module.exports = mongoose.model("note",notesSchema)