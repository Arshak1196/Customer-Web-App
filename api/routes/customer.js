import express from 'express'
import { addCustomerAddress, deleteCustomerDetails, getAllCustomers, getSingleCustomer, insertNewCustomer, updateCustomerAddress, updateCustomerDetails } from '../controllers/customerController.js'
const router = express.Router()

router.get('/test', (req, res) => {
    res.json({ success: true })
})

//Get all customers
router.get('/selectCustomers', getAllCustomers)

//Get a customer by Id
router.get('/selectCustomerById/:id', getSingleCustomer)

//Add new customer
router.post('/insertCustomer', insertNewCustomer)

//Add customer address
router.post('/insertCustomerAddress/:id',addCustomerAddress)

//Update customer
router.post('/updateCustomer/:id',updateCustomerDetails)

//Update Customer Address
router.post('/updateCustomerAddress/:id',updateCustomerAddress)

//delete Customer 
router.post('/deleteCustomer/:id',deleteCustomerDetails)

export default router