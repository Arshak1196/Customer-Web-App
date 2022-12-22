import { Grid, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'

function LoginDetails() {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    return (
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
                    {errors.company?.type === 'required' && <p className="required-mark">Username is required</p>}
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
                    {errors.company?.type === 'required' && <p className="required-mark">First Name is required</p>}
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
                    {errors.company?.type === 'required' && <p className="required-mark">Last Name is required</p>}
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
                    {errors.company?.type === 'required' && <p className="required-mark">Username is required</p>}
                </Grid>
                <Grid item xs={12} sx={{ mb: 2, mt: 1 }} >
                    <TextField
                        id="outlined-name"
                        label="Cofimr Password"
                        fullWidth
                        required
                        className='loginInput'
                        {...register("confirmPassword", { required: true })}
                    />
                    {errors.company?.type === 'required' && <p className="required-mark">Username is required</p>}
                </Grid>
            </Grid>



        </Grid>
    )
}

export default LoginDetails