import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';


export default function Title(props) {

  return (
    <Box 
      sx={{ 
        margin: '30px',  
        padding: '10px',
      }}
    >
        <Typography variant='h3' textAlign="left">
            {props.children}
        </Typography>
    </Box>
  )
}
