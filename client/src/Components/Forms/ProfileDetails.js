import { Grid, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'

function ProfileDetails() {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    return (
        <Grid container direction='row'>
            <Grid item md={12} sx={{ pr: 2 }}>
                <Grid item xs={12} sx={{ mb: 2, mt: 1 }} >
                    <TextField
                        id="outlined-name"
                        label="Address Line 1"
                        fullWidth
                        required
                        className='loginInput'
                        {...register("address", { required: true })}
                    />
                    {errors.company?.type === 'required' && <p className="required-mark">Address is required</p>}
                </Grid>
                <Grid item xs={12} sx={{ mb: 2, mt: 1 }} >
                    <TextField
                        id="outlined-name"
                        label="Country"
                        fullWidth
                        required
                        className='loginInput'
                        {...register("country", { required: true })}
                    />
                    {errors.company?.type === 'required' && <p className="required-mark">Country is required</p>}
                </Grid>
                <Grid item xs={12} sx={{ mb: 2, mt: 1 }} >
                    <TextField
                        id="outlined-name"
                        label="State"
                        fullWidth
                        required
                        className='loginInput'
                        {...register("state", { required: true })}
                    />
                    {errors.company?.type === 'required' && <p className="required-mark">State is required</p>}
                </Grid>
                <Grid item xs={12} sx={{ mb: 2, mt: 1 }} >
                    <TextField
                        id="outlined-name"
                        label="City"
                        fullWidth
                        required
                        className='loginInput'
                        {...register("city", { required: true })}
                    />
                    {errors.company?.type === 'required' && <p className="required-mark">City is required</p>}
                </Grid>
                <Grid item xs={12} sx={{ mb: 2, mt: 1 }} >
                    <TextField
                        id="outlined-name"
                        label="Zip code"
                        fullWidth
                        required
                        className='loginInput'
                        {...register("zipCode", { required: true })}
                    />
                    {errors.company?.type === 'required' && <p className="required-mark">Zip Code is required</p>}
                </Grid>
                
            </Grid>



        </Grid>
    )
}

export default ProfileDetails