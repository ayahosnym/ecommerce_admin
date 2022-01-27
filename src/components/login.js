import * as React from 'react';
import { Avatar, Grid, Paper,TextField,Button, Typography,Link} from "@material-ui/core";
// import PersonAddIcon from '@material-ui/icons/PersonAdd';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useNavigate } from "react-router-dom";

function Login({autenticate}) {
    const paperStyle={padding:20 ,height:'70vh',width:280,margin:'auto'}
    const avatarStyle={backgroundColor:"#3F51B5"}
    const mr={marginBottom:"20px"}
    const bgStyle={backgroundColor:"aliceblue",height:"100vh", paddingTop:'50px'}


    const navigate = useNavigate();
    const onClick = () => {
        autenticate();
    }
  return (
      <div  style={bgStyle}>
<Grid >
    <Paper elevation={10} style={paperStyle}>
        <Grid align="center" >
        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
        <h2>Log In</h2>
        </Grid> 
     <TextField style={mr} label="Username" placeholder="Enter username" fullWidth required/>
     <TextField  label="Password" placeholder="Enter password" type='password' fullWidth required/>
     <FormControlLabel style={mr} 
         control={<Checkbox name="checkedB" color="primary"/>}
         label="Remember me"/>
    
      <Button color="primary" onClick={onClick} variant="contained" fullWidth>Log In</Button>
      <Typography >
        Don't have an account ?
        <Link  href="/signup"> Sign Up</Link>     
      </Typography>
    </Paper>
</Grid> </div>
  );
}

export default Login;
