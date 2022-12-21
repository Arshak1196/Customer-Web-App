import mongoose, { mongo } from "mongoose";
const Schema = mongoose.Schema;

//address collection Schema

const addressSchema = new Schema({
    customerId: {
        type: mongoose.Types.ObjectId,
        ref: 'Customer',
        required: true,
    },
    address: {
        type: String,
    },
    landmark: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String
    },
    country: {
        type: String,
    },
    zipCode: {
        type: Number
    }
}, { timestamps: true })

export default mongoose.model('Address',addressSchema)