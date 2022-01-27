import React, { useState, useEffect } from 'react';
import { Avatar, Grid, Paper, TextField, Button, Typography, Link } from "@material-ui/core";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
//new 
import axios from "axios";
import { useForm } from "react-hook-form";


function Signup() {
  const paperStyle = { padding: 20, height: '70vh', width: 280, margin: 'auto' }
  const avatarStyle = { backgroundColor: "#3F51B5" }
  const mr = { marginBottom: "20px" }
  const bgStyle = { backgroundColor: "aliceblue", height: "100vh", paddingTop: '50px' }

  // functionality 
  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState([]);

  const URL = "https://products-tohw.herokuapp.com/auth/signup";
  const onSubmit = (data) => {
    axios.post(URL, { ...data, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" })
    reset({})
  }

  return (
    <div style={bgStyle}>
      <Grid >
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center" >
            <Avatar style={avatarStyle}><PersonAddIcon /></Avatar>
            <h2>Sign Up</h2>
          </Grid>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField {...register("name")} style={mr} label="Name" placeholder="Enter name" fullWidth required />
            <TextField {...register("username")} style={mr} label="Username" placeholder="Enter username" fullWidth required />
            <TextField {...register("password")} style={mr} label="Password" placeholder="Enter password" type='password' fullWidth required />
            <TextField {...register("role")} style={mr} label="Role" placeholder="Enter Role" fullWidth required />
            <Button color="primary" type="submit" variant="contained" fullWidth
            // onClick={() => console.log("hello")}
            >
              Sign Up
            </Button>
          </form>
          <Typography >
            Do you have an account ?
            <Link href="/login"> Log In</Link>
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
}

export default Signup;
