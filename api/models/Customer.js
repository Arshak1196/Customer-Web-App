import mongoose, { Mongoose } from 'mongoose'
const Schema = mongoose.Schema;

//customer collection Schmea

const customerSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'First Name is required']
    },
    lastName: {
        type: String,
        required: [true, 'Last Name is required']
    },
    userName: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
    },
    email: {
        type: String,
        unique: true,
    },
    phone: {
        type: Number,
        unique: true,
    },
    dob: {
        type: Date,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'others']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    image: {
        type: String
    }
}, { timestamps: true })

export default mongoose.model('Customer', customerSchema)