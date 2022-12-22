import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button, Dialog, DialogContent, DialogTitle, Divider, FormControl, Grid, IconButton, List, ListItem, ListItemText, NativeSelect, Step, StepLabel, Stepper, TextField, Typography } from '@mui/material'
import './SideBar.css'
import { Box } from '@mui/system';
import LoginDetails from '../Forms/LoginDetails';
import ProfileDetails from '../Forms/ProfileDetails';

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};

const steps = ['LOGIN DETAILS', 'PROFILE DETAILS'];

function SideBar({ customers }) {
    const [open, setOpen] = useState(false);
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className='sidebar'>
            <Grid >
                <TextField variant='standard' placeholder='Customers' />
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <IconButton sx={{ marginLeft: '20px' }} onClick={handleClickOpen}>
                    <AddCircleOutlineIcon />
                </IconButton>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Add User</DialogTitle>
                    <DialogContent>
                        <Box sx={{ width: '100%' }}>
                            <Stepper activeStep={activeStep}>
                                {steps.map((label, index) => {
                                    const stepProps = {};
                                    const labelProps = {};
                                    return (
                                        <Step key={label} {...stepProps}>
                                            <StepLabel {...labelProps}>{label}</StepLabel>
                                        </Step>
                                    );
                                })}
                            </Stepper>
                            {activeStep === steps.length ? (
                                <React.Fragment>
                                    <Typography sx={{ mt: 2, mb: 1 }}>
                                        All steps completed - you&apos;re finished
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                        <Box sx={{ flex: '1 1 auto' }} />
                                        <Button onClick={handleReset}>Reset</Button>
                                    </Box>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>

                                    {activeStep === 0 && <LoginDetails close={handleClose} next={handleNext} />}
                                    {activeStep === 1 && <ProfileDetails close={handleClose} next={handleNext} />}
                                </React.Fragment>
                            )}
                        </Box>
                    </DialogContent>
                </Dialog>
            </Grid>
            <Grid container
                sx={{ paddingTop: '1rem', paddingBottom: '1rem' }}
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
            <Grid>
                <List sx={style} component="nav" >
                    {customers.map((customer) => {
                        return (
                            <>
                                <ListItem button >
                                    <ListItemText primary={customer.firstName + ' ' + customer.lastName} secondary={customer.userName} />
                                </ListItem>
                                <Divider />
                            </>
                        )
                    })}
                </List>
            </Grid>
        </div>
    )
}

export default SideBar
