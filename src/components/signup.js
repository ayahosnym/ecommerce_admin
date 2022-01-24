import * as React from 'react';
import { Avatar, Grid, Paper,TextField,Button, Typography,Link} from "@material-ui/core";
import PersonAddIcon from '@material-ui/icons/PersonAdd';

function Signup() {
    const paperStyle={padding:20 ,height:'70vh',width:280,margin:'auto'}
    const avatarStyle={backgroundColor:"#3F51B5"}
    const mr={marginBottom:"20px"}
    const bgStyle={backgroundColor:"aliceblue",height:"100vh", paddingTop:'50px'}
 
  return (
      <div style={bgStyle}>
<Grid >
    <Paper elevation={10} style={paperStyle}>
        <Grid align="center" >
        <Avatar style={avatarStyle}><PersonAddIcon/></Avatar>
        <h2>Sign Up</h2>
        </Grid>
    <TextField style={mr} label="Name" placeholder="Enter name" fullWidth required/>
     <TextField style={mr} label="Username" placeholder="Enter username" fullWidth required/>
     <TextField style={mr} label="Password" placeholder="Enter password" type='password' fullWidth required/>
     <TextField style={mr} label="Role" placeholder="Enter Role" fullWidth required/>
  <Button color="primary" type="submit" variant="contained" fullWidth>Sign Up</Button>
 <Typography >
Do you have an account ?
<Link href="#Login"> Log In</Link>     
 </Typography>
    </Paper>
</Grid> </div>
  );
}

export default Signup;
