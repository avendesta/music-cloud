const express = require('express')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')
const dotenv = require('dotenv')

require('dotenv').config();
const port = process.env.PORT || 3000;

// route imports
const userRouter = require('./routes/userRouter')
const commentRouter = require('./routes/commentRouter')


// initializations
const app = express()

// middlewares
app.use(cors())
app.use(express.json())

app.use(morgan('dev'));
app.use("public", express.static(path.join(__dirname, 'assets')));

// routes
app.use("/users", userRouter)

// client route
app.get("/", (req,res)=>{
    res.send({result: "ok"})
})


// error handling
app.use((err,req,res,next)=>{
    return res.json({error: err.message})
})

// bootup
app.listen(port, _=>console.log(`running on port ${port}`))