import React from 'react';

import { Link, Typography } from '@mui/material';
import { Box } from '@mui/system';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {

    return (
        <footer>
            <Box
                sx={{
                    width: "100%",
                    padding: "15px",

                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Box
                    mb="10px"
                >
                    <Typography
                        variant='p'
                    >
                        &copy; 2022 - Gabriel Begnami
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Link href='https://www.linkedin.com/in/gabriel-benvindo-begnami-970124227/' sx={{ color: "black", mr: "5px" }}>
                        <LinkedInIcon fontSize='medium' />
                    </Link>
                    <Link href='https://github.com/Welcome121' sx={{ color: "black", mr: "5px" }}>
                        <GitHubIcon fontSize='medium' />
                    </Link>
                    <Link href='https://www.instagram.com/gbegnami_/' sx={{ color: "black" }}>
                        <InstagramIcon fontSize='medium' />
                    </Link>
                </Box>
            </Box>
        </footer>
    );
}
