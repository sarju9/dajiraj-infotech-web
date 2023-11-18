import React from 'react';
import './Header.css';
import AppBar from '@mui/material/AppBar';
import { Grid, Toolbar, Typography, Button, Box, Stack, Container, Link, ListItem } from '@mui/material';

const Header = () => {
    return (
        <>
            <section id="header" className="d-flex align-items-center main-header-div">
                {/* <Grid container className='main-header'> */}
                {/* <Box className="main-header"> */}
                {/* <AppBar className='main-header'>
                            <Toolbar>
                                <Grid container className='main-logo' sx={{ p: 2, flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'nowrap', backgroundColor: '#FFFDF4' }}>
                                    <Grid>
                                        <img src='./Images/Logo.svg' alt='logo' />
                                    </Grid>
                                    <Grid item sx={{}}>
                                        <Grid container sx={{}}>
                                            <Grid item>
                                                <Button sx={{ color: '#ededed', borderRadius: '40px' }}>Services</Button>
                                            </Grid>
                                            <Grid item sx={{ mx: 5 }}>
                                                <Button sx={{ color: '#ededed', borderRadius: '40px' }}>Work</Button>
                                            </Grid>
                                            <Grid item>
                                                <Button sx={{ color: '#ededed', borderRadius: '40px' }}>About</Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Toolbar>
                        </AppBar> */}
                {/* </Box> */}
                {/* </Grid> */}
                <Container maxWidth="lg">
                    <Grid className="main-header" >
                        <Grid lg={3} md={4} sm={4} xs={12}>
                            <Box>
                                <Link href='#home'><img src='./Images/Logo.svg' className="header-logo" /></Link>
                            </Box>
                        </Grid>
                        <Grid className="menu" lg={6} md={4} sm={4} xs={12}>
                            <Box>
                                <Stack direction="row" spacing={2}>
                                    {/* <Button href='#company' className='menu-link'>div <div className="round-border"></div></Button> */}
                                    <Link href='#company' className='menu-link'>Company <span className="menu-ellipse"><img src='./Images/Ellipse 1.svg' /></span></Link>
                                    <Link href='#services' className='menu-link'>Services <span className='menu-ellipse'><img src='./Images/Ellipse 1.svg' /></span></Link>
                                    <Link href='#portfolio' className='menu-link'>Portfolio <span className='menu-ellipse'><img src='./Images/Ellipse 1.svg' /></span></Link>
                                    <Link href='#career' className='menu-link'>Career <span className='menu-ellipse'><img src='./Images/Ellipse 1.svg' /></span></Link>
                                </Stack>
                            </Box>
                        </Grid>
                        <Grid lg={3} md={4} sm={4} xs={12}>
                            <Box className="contact-menu">
                                <Button href='#contactUs' variant='contained' className="contact-menu-btn">Contact Us</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default Header