import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import {db} from './config/db.js'
import { ErrorHandler } from './middleware/errorHandler.js'
import customerRoute from './routes/customer.js'

const app=express()
dotenv.config()

//middlewares
app.use(express.json())
app.use(cors())

app.use('/',customerRoute)

app.use(ErrorHandler);

const PORT = process.env.PORT || 8000

app.listen(PORT, (err, res) => {
    if (err) {
        console.log("server runing is failed")
    } else {
        console.log(`${PORT} server is runing`)
    }
})
