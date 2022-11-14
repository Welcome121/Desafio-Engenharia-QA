import React from 'react';

import { AppBar, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';


export default function Header() {
  return (
    <Box
        sx={{
            width: "100%"
        }}
    >
        <AppBar
            position='relative'
            sx={{ backgroundColor: "primary.main", color: "white" }}
        >
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Typography 
                    fontSize="35px"
                    letterSpacing="3px"
                >
                    DETRAN
                </Typography>
            </Toolbar>
        </AppBar>
    </Box>
  )
}
