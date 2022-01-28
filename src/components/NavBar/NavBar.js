
import React from 'react';
import { AppBar,Box ,Button, Toolbar, Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { lightBlue } from '@mui/material/colors';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar(){
    return (
        <Box >
        <AppBar position="static" sx={{   bgcolor:lightBlue[600] }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}>
            <MenuIcon />
            <Typography variant="h6" component="div" sx={{ color:lightBlue[50]  }}>
              News
            </Typography>
            </IconButton>
        <Link to="Category"><Button  sx={{color:lightBlue[50]  }}>Category</Button></Link>
          </Toolbar>
        </AppBar>
      </Box>
    )
}
export default Navbar;