import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { FormControl, Grid, IconButton, InputLabel, NativeSelect, TextField } from '@mui/material'
import './SideBar.css'

function SideBar() {
    return (
        <div className='sidebar'>
            <Grid >
                <TextField variant='standard' placeholder='Customers' />
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <IconButton sx={{ marginLeft: '20px' }}>
                    <AddCircleOutlineIcon />
                </IconButton>
            </Grid>
            <Grid container
                sx={{paddingTop:'1rem'}}
                direction="row"
                justifyContent="flex-end"
                alignItems="center">
                <FormControl >
                    <NativeSelect
                        inputProps={{
                            name: 'age',
                            id: 'uncontrolled-native',
                        }}
                    >
                        <option value={10}>Sort By</option>
                        <option value={10}>A-Z</option>
                        <option value={20}>Z-A</option>
                    </NativeSelect>
                </FormControl>
            </Grid>

        </div>
    )
}

export default SideBar
