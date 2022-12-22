import { Box, Button, Grid, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify';
import * as customerAPI from '../../api/customerRequests'

function LoginDetails({ close, next }) {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = async(data) => {
        if(data.password !== data.confirmPassword){
            console.log(data.password,data.confirmPassword)
            toast.error("Confirm Password should be same ")
            return
        }
        try {
            let newCustomer = await customerAPI.addNewCustomer(data)
            console.log(newCustomer)
            next()
        } catch (error) {
            console.log(error) 
            toast.error('Something went wrong')
        }
    }

return (
    <>
        <Grid container direction='row'>
            <Grid item md={12} sx={{ pr: 2 }}>
                <Grid item xs={12} sx={{ mb: 2, mt: 1 }} >
                    <TextField
                        id="outlined-name"
                        label="Username"
                        fullWidth
                        required
                        className='loginInput'
                        {...register("userName", { required: true })}
                    />
                    {errors.userName?.type === 'required' && <p className="required-mark">Username is required</p>}
                </Grid>
                <Grid item xs={12} sx={{ mb: 2, mt: 1 }} >
                    <TextField
                        id="outlined-name"
                        label="First Name"
                        fullWidth
                        required
                        className='loginInput'
                        {...register("firstName", { required: true })}
                    />
                    {errors.firstName?.type === 'required' && <p className="required-mark">First Name is required</p>}
                </Grid>
                <Grid item xs={12} sx={{ mb: 2, mt: 1 }} >
                    <TextField
                        id="outlined-name"
                        label="Last Name"
                        fullWidth
                        required
                        className='loginInput'
                        {...register("lastName", { required: true })}
                    />
                    {errors.lastName?.type === 'required' && <p className="required-mark">Last Name is required</p>}
                </Grid>
                <Grid item xs={12} sx={{ mb: 2, mt: 1 }} >
                    <TextField
                        id="outlined-name"
                        label="Password"
                        fullWidth
                        required
                        className='loginInput'
                        {...register("password", { required: true })}
                    />
                    {errors.password?.type === 'required' && <p className="required-mark">Password is required</p>}
                </Grid>
                <Grid item xs={12} sx={{ mb: 2, mt: 1 }} >
                    <TextField
                        id="outlined-name"
                        label="Confirm Password"
                        fullWidth
                        required
                        className='loginInput'
                        {...register("confirmPassword", { required: true })}
                    />
                    {errors.confirmPassword?.type === 'required' && <p className="required-mark">Confirm password</p>}
                </Grid>
            </Grid>
        </Grid>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', pt: 2 }}>
            <Button onClick={close} variant='outlined' color='error'>
                Cancel
            </Button>
            <Button onClick={handleSubmit(onSubmit)} variant='contained' >
                Proceed
            </Button>
        </Box>
    </>
)
}

export default LoginDetails