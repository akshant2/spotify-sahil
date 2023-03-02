import React, {useState} from 'react';
import {TextField, Button, Paper, Grid, FormControlLabel, Checkbox, Avatar, Typography, Link} from "@material-ui/core";

const Login =()=> {
    // Setting up Page in the center
    const paperStyle={padding :20, height: '70vh', width:300, margin:"20px auto"}
    return(
        //Spotify logo and Sign in the center
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid>
                    <Avatar alt='Spotify' src='https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png'></Avatar>
                    <h1>Please Sign In</h1>
                </Grid>
                <TextField label='Username' placeholder='Enter username' type='email' fullWidth required></TextField>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required></TextField>
                <FormControlLabel control={
                    <Checkbox
                        name='checked'
                        color='primary'
                    />

                } label="Remember me"
                />
                <Button type='submit' color='primary' variant='contained' size='small' fullWidth>Sign In</Button>
                <Typography>
                    <Link href='#'>
                        Forgot password?
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}
export default Login;