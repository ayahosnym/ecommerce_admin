import { AddOutlined } from "@mui/icons-material";
import { Box, Button, Card, CardHeader, Icon, IconButton } from "@mui/material";
import React from 'react';
import { lightBlue} from '@mui/material/colors';


function Categories() {
    return (
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



    )
};
export default Categories;