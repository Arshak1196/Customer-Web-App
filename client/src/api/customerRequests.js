import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8000/'
})


export const getAllCustomers = () => instance.get('/selectCustomers')

export const addNewCustomer = formData => instance.post('/insertCustomer',formData)

export const addCustomerAddress = (formData,id) => instance.post(`/insertCustomerAddress/${id}`,formData)