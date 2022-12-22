import './App.css';
import Navbar from './Components/Navbar/Navbar';
import SideBar from './Components/SideBar/SideBar';
import CustomerDetails from './Components/CustomerDetails/CustomerDetails';
import * as customerAPI from './api/customerRequests'
import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';


function App() {
  const [customers,setCustomers]=useState([])

    useEffect(()=>{
      fetchCustomers()
    },[])

  const fetchCustomers=async()=>{
    try {
      let data = await customerAPI.getAllCustomers()
      setCustomers(data.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="App">
      <Navbar />
      <Grid container>
        <Grid item md={3} >
          <SideBar customers={customers}/>
        </Grid>
        <Grid item md={9}>
          <CustomerDetails/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
