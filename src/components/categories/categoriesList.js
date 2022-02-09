import { AddOutlined, Category } from "@mui/icons-material";
import { Box, Button, Card, CardHeader, Icon, IconButton } from "@mui/material";
import React from 'react';
import { lightBlue} from '@mui/material/colors';
import { useState,  useEffect} from 'react';
import {getCategories} from '../../services/categories';
function Categories() {

  const[categories,setCategories] = useState([]);

    useEffect(() => {
      getCategories().then((data)=>{
            console.log(data);
            setCategories(data);
        })
        
    }, []);
    return (
      <>
        <Box sx={{ width: '25%' }}>
            <Card>
                <CardHeader
                    action={
                        <IconButton>
                        <Button variant="contained"  sx={{ bgcolor: lightBlue[500] }} endIcon={<AddOutlined />}>Add Category</Button>
                        </IconButton>
                    }
                    title="Category"
                />
            </Card>
            
        </Box>
        {categories.map((Category,index)=>
          <Card sx={{ width: '10%',bgcolor: lightBlue[500] ,height:"25px", marginTop:"20px", marginLeft:"50px"}} key={index}>{Category.name}</Card>
        )}
        </>



    )
};
export default Categories;