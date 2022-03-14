const express = require('express')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

require('dotenv').config();
const port = process.env.PORT || 3000;

// route imports
const userRouter = require('./routes/userRouter')
const favoriteRouter = require('./routes/favoriteRouter')
const commentRouter = require('./routes/commentRouter')
const musicRouter = require('./routes/musicRouter')





// initializations
const app = express()

// middlewares
app.use(cors())
app.use(express.json())

app.use(morgan('dev'));
app.use("public", express.static(path.join(__dirname, 'assets')));

// routes
app.use("/favorite", favoriteRouter)
app.use("/users", userRouter)
app.use("/comments", commentRouter)
app.use("/music", musicRouter)


// client route
app.get("/", (req, res) => {
    res.send({ result: "ok" })
})


// error handling
app.use((err, req, res, next) => {
    return res.json({ error: err.message })
})

// bootup
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    app.listen(port, _ => console.log(`running on port ${port}`))
}).catch((err) => {
    console.log(err)
})