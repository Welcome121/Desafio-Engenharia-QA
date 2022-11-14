import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box } from '@mui/system';
import { Button, Paper, Typography } from '@mui/material';


export default function Home() {
    const navigate = useNavigate();

    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "100vh",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Paper 
                    variant='outlined'
                    sx={{
                        padding: "25px",

                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",

                        borderRadius: "10px"
                    }}
                >
                    <Box>
                        <Typography
                            variant='h1'
                            fontSize='35px'

                            mb='15px'
                        >
                            Desafio Rethink
                        </Typography>
                    </Box>
                    <Box>
                        <Button
                            variant='contained'
                            onClick={() => {navigate("/clientes")}}
                        >
                            Entrar
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </>
    );
}
