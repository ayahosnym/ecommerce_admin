import React from 'react'
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';


const CustomTypography = styled(Typography)`
   color: var(--colors-darkBlue);
`;


function PageTitle({text}) {

    return (
        <CustomTypography variant="h4" component="h4" align="left" my={4}>
            {text}
        </CustomTypography>
    )
}

export default PageTitle
