const notesModel = require('../models/notesModel')
const axios = require("axios")


module.exports.createNotes = async function (req, res) {
    try {
        let { title, content, category } = req.body
        const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY

        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GOOGLE_API_KEY}`,
            {
                contents: [{ parts: [{ text: `Give me summary for this but make it descriptive also try to write in short crisp points : ${content}` }] }]
            },
            {
                headers: { "Content-Type": "application/json" }
            }
        )
        let summary = response.data.candidates[0].content.parts[0].text

        if (!response) {
            res.status(400).status({ message: "Some error occured in generating summary." })
        }

        const note = await notesModel.create({
            title,
            content,
            category,
            userId: req.user._id,
            summary
        })
        res.send(note)

    } catch (error) {
        res.status(400).send({ message: "Some error in saving notes." })
    }

}
module.exports.allNotes = async function (req, res) {
    let userId = req.user._id
    let notes = await notesModel.find({ userId })
    res.status(200).json(notes)
}
module.exports.editNotes = async function (req, res) {
    try {
        let noteId = req.params.id

        let { title, content, category } = req.body


        const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY

        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GOOGLE_API_KEY}`,
            {
                contents: [{ parts: [{ text: `Give me summary for this but make it descriptive also try to write in short crisp points : ${content}` }] }]
            },
            {
                headers: { "Content-Type": "application/json" }
            }
        )
        let summary = response.data.candidates[0].content.parts[0].text

        if (!response) {
            res.status(400).json({ message: "Some error occured in generating summary." })
        }

        const note = await notesModel.findByIdAndUpdate(noteId, {
            title,
            content,
            category,
            summary
        },{ new: true })
        res.send(note)
    } catch (error) {
        res.status(400).json({ message: "Some error in creating notes." })
    }
}
module.exports.deleteNotes = async function (req,res){
    try {
        let noteId = req.params.id
        let note = await notesModel.findByIdAndDelete(noteId)
        if(note){
            return res.status(400).json({message:"Note deleted successfully."})
        }else{
            return res.status(400).json({message:"Note not found , try again."})
        }
    } catch (error) {
        res.status(400).json({message:"Some error while deleting notes.",error})
    }

    
}