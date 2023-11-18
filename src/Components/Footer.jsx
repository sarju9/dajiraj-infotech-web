import React from 'react'
import { Divider, Container, Box, Typography, Grid } from '@mui/material'
import "./Footer.css";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <Grid container lg={12} md={12} sm={12} xs={12}>
                <Box className="horizontal-line">
                    <Divider orientation='horizontal' variant='fullWidth'></Divider>
                </Box>
            </Grid>
            <Container maxWidth="xl" className='footer' id="contactUs">
                <Grid container lg={12} md={12} sm={12} xs={12}>
                    <Container maxWidth="md">
                        <Box className="footer-main-div">
                            <img src='./Images/Footer_Logo.svg' alt="Footer Logo" className='footer-logo-img'/>
                            <Typography gutterBottom className='footer-descripton'>
                                Custom software development company serving leading Enterprises and <br />
                                Startups. The Company offers custom-made solutions based on the <br />
                                expectations of the clients and the merchandise will be delivered with high <br />
                                quality at affordable rates and at specified times.
                            </Typography>
                        </Box>
                    </Container>
                </Grid>
            </Container>
            <Grid container lg={12} md={12} sm={12} xs={12}>
                <Box className="footer-inner-content-div">
                    <Typography>Copyright © {year} Dajiraj Infotech. All Rights Reserved.</Typography>
                </Box>
            </Grid>
        </>
    )
}

export default Footer