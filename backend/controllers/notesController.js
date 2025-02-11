const notesModel = require('../models/notesModel')


module.exports.createNotes = async function (req,res) {
    try {
        let {title , content , category} = req.body
        console.log(req.user._id);
        let note = await notesModel.findOne({userId: req.user})
    } catch (error) {
        
    }
     
}