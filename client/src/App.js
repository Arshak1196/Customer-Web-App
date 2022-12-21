import './App.css';
import Navbar from './Components/Navbar/Navbar';
import SideBar from './Components/SideBar/SideBar';
import CustomerDetails from './Components/CustomerDetails/CustomerDetails';
import { Grid } from '@mui/material';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Grid container>
        <Grid item md={3} >
          <SideBar/>
        </Grid>
        <Grid item md={9}>
          <CustomerDetails/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
