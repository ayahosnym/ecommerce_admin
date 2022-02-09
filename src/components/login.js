import React, { useState } from 'react';
import { Avatar, Grid, Paper, TextField, Button, Typography, Link } from "@material-ui/core";
// import PersonAddIcon from '@material-ui/icons/PersonAdd';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from "axios";
import { useNavigate } from "react-router"
import { useForm } from "react-hook-form";

function Login({autenticate}) {
  const paperStyle = { padding: 20, height: '70vh', width: 280, margin: 'auto' }
  const avatarStyle = { backgroundColor: "#3F51B5" }
  const mr = { marginBottom: "20px" }
  const bgStyle = { backgroundColor: "aliceblue", height: "100vh", paddingTop: '50px' }


  // functionality 
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [error,setError] = useState("");
  //
  const onSubmit = (data) => {
    axios.post("https://products-tohw.herokuapp.com/auth/login", { 'username': `${data.username}`, 'password': `${data.password}` })
      .then((response) => {
        console.log(response);
        if(response){
          autenticate();
          navigate('/products', { replace: true });
        }
      }).catch(error => {
        if (error.response.status === 401)  {
          // console.log(error.response.data.message);
          setError( error.response.data.message)
        }
      });
      
    //   autenticate();
    // //redirect after login
    // navigate('/products', { replace: true })
    
  }

  return (
    <div style={bgStyle}>
      <Grid >
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center" >
            <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
            <h2>Log In</h2>
          </Grid>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField {...register("username")} style={mr} label="Username" placeholder="Enter username" type="text" fullWidth required />
            <TextField {...register("password")} label="Password" placeholder="Enter password" type='text' fullWidth required />
            <small style={{"color":"red"}}>{error}</small>
            <FormControlLabel style={mr}
              control={<Checkbox name="checkedB" color="primary" />}
              label="Remember me" />

            <Button color="primary" type="submit" variant="contained" fullWidth>Log In</Button>
          </form>
          <Typography >
            Don't have an account ?
            <Link href="/signup"> Sign Up</Link>
          </Typography>
        </Paper>
      </Grid>
    </div>

  );
}

export default Login;
