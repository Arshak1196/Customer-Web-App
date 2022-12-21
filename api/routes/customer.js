import express from 'express'
import { getAllCustomers, getSingleCustomer, insertNewCustomer } from '../controllers/customerController.js'
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
router.post('/insertCustomerAddress/:id')

export default router