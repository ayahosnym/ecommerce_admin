import React, { useState, useContext } from 'react';
import { Avatar, Grid, Paper, TextField, Button, Typography, Link } from "@material-ui/core";
// import PersonAddIcon from '@material-ui/icons/PersonAdd';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from "axios";
import { useNavigate } from "react-router"
import { useForm } from "react-hook-form";
import { UserContext } from '../UserContext';
import { AuthContext } from '../AuthContext';

function Login() {
  const paperStyle = { padding: 20, height: '70vh', width: 280, margin: 'auto' }
  const avatarStyle = { backgroundColor: "#3F51B5" }
  const mr = { marginBottom: "20px" }
  const bgStyle = { backgroundColor: "aliceblue", height: "100vh", paddingTop: '50px' }


  const  {login, user}  = useContext(UserContext);
  const  {auth, authenticate}  = useContext(AuthContext);

  // functionality 
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  //

  let onSubmit = async (data) => {
  let res =  await axios.post("https://products-tohw.herokuapp.com/auth/login", { 'username': `${data.username}`, 'password': `${data.password}` })
      .then(response => response);
      
      if(res.status === 201){
        console.log("res.data");
        console.log(res.data);

        login(res.data);
        authenticate();
        //redirect after login
        navigate('/products');
      }else{
        console.log("weeeeee");
      }
    
    
    
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
