const express = require('express')
const { createNotes ,allNotes } = require('../controllers/notesController')
const router = express.Router()
const isLoggedin = require("../middlewares/isLoggedin")

router.post("/create", isLoggedin, createNotes)
router.get("/allnotes",isLoggedin,allNotes)


module.exports = router