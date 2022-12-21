import Customer from "../models/Customer.js"
import bcrypt from 'bcryptjs'
import { createError } from "../middleware/errorHandler.js"
import Address from "../models/Address.js"



//get all customers list
export const getAllCustomers = async (req, res, next) => {
    try {
        let customers = await Customer.find().sort({ 'createdAt': -1 })
        if(!customers[0]){
            return next(createError(400,'No Customers found'))
        }
        res.status(200).json(customers)
    } catch (error) {
        next(error)
    }
}


//get details of single customer by id
export const getSingleCustomer = async (req, res, next) => {
    try {
        const customer = await Customer.findById(req.params.id)
        if(!customer){
            return next(createError(400,'No Customer found'))
        }
        res.status(200).json(customer)
    } catch (error) {
        next(error)
    }
}

//insert new customer details into database
export const insertNewCustomer = async (req, res, next) => {
    try {
        //destructure request body
        const { firstName, lastName, userName, email, phone, dob, gender, password, confirmPassword, image } = req.body

        //check password and confirm Password
        if(password!==confirmPassword){
            next(createError(400,'Confirm Password is not correct'))
        }

        //encrypting password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const customer = new Customer({firstName, lastName, userName, email, phone, dob, gender,password: hash, image} )
        await customer.save()
        res.status(200).json(customer)
    } catch (error) {
        next(error)
    }
}

//insert customer address
export const addCustomerAddress = async (req,res,next)=>{
    try {
        const {address,landmark,city,state,country,zipCode}=req.body
        let customer= await Customer.findById(req.params.id)
        if(!customer){
            return next(createError(400,'Invalid Customer Id'))
        }
        const customerAddress= new Address({customerId:customer._id,address,landmark,ciry,state,country,zipCode})
        await customerAddress.save()
        res.status(200).json({'success':true})
    } catch (error) {
        next(error)
    }
}

//update Customer Details
export const updateCustomerDetails = async (req,res,next)=>{
    try {
        const customer = await Customer.findById(req.params.id)
        if(!customer) return next(createError(400,'Invalid Customer Id'))
        await Customer.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).json({updated:true})
    } catch (error) {
        next(error)
    }
}

//Update Customer Address Details
export const updateCustomerAddress = async(req,res,next)=>{
    try {
        const address= await Address.find({customerId:req.params.id})
        if(address[0]){
            await Address.updateOne({customerId:req.params._id},
                {$set:req.body},
                { new: true }
                )
        }else{
            const customerAddress={...req.body,customerId:req.params.id}
            await new Address(customerAddress).save()
        }
        res.status(200).json({updated:true})
    } catch (error) {
        next(error)
    }
}

//delete Customer Details and Address from DataBase
export const deleteCustomerDetails = async (req,res,next)=>{
    try {
        const customer = await Customer.findById(req.params.id)
        const address=await Address.find({customerId:req.params.id})
        if(!customer) return next(createError(400,'Invalid Customer Id'))
        await Customer.findByIdAndDelete(req.params.id)
        if(address[0]){
            await Address.deleteOne({customerId:req.params.id})
        }
        res.status(200).json({deleted:true})
    } catch (error) {
        next(error)
    }
}