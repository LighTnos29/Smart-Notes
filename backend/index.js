const cookieParser = require('cookie-parser')
const express = require('express')
const app = express();
const mongooseConnection = require('./config/mongooseConnection')
const router = express.Router()
const userRouter = require("./routes/userRouter")
const notesRouter = require("./routes/notesRouter")
const cors = require('cors')

app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use("/users", userRouter)
app.use("/notes", notesRouter)

app.listen(3000)