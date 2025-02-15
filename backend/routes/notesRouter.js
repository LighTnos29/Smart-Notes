const express = require('express')
const { createNotes, allNotes, editNotes, deleteNotes } = require('../controllers/notesController')
const router = express.Router()
const isLoggedin = require("../middlewares/isLoggedin")

router.post("/create", isLoggedin, createNotes)
router.get("/allnotes", isLoggedin, allNotes)
router.put("/edit/:id", isLoggedin, editNotes)
router.delete("/delete/:id", isLoggedin, deleteNotes)


module.exports = router