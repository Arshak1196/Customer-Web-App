import mongoose from "mongoose";
mongoose.set('strictQuery',false)
import dotenv from 'dotenv'
dotenv.config()

//data base connection (Mongodb)

class Database {
    constructor() {
        this._connect()
    }
    _connect() {
        mongoose.connect(process.env.MONGO_URI)
            .then(() => {
                console.log("db connection successfull");
            })
            .catch(err => {
                console.log(err)
                console.error('db connection error');
            })
    }
}

export const db= new Database()
