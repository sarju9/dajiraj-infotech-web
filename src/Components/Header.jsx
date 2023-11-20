import React, { useState } from 'react';
import './Header.css';
import AppBar from '@mui/material/AppBar';
import { Grid, Toolbar, Typography, Button, Box, Stack, Container, Link, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <section id="header" className="d-flex align-items-center main-header-div">
                <Container maxWidth="lg">
                    <Grid className={ openMenu ? "main-header active" : "main-header" }>
                        <Grid lg={3} md={4} sm={4} xs={12}>
                            <Box>
                                <Link href='#home'><img src='./Images/Logo.svg' className="header-logo" /></Link>
                            </Box>
                        </Grid>
                        <Grid className="menu" lg={6} md={4} sm={4} xs={12}>
                            <Box>
                                <Stack direction="row" spacing={2}>
                                    <Link href='#company' className='menu-link' onClick={() => setOpenMenu(false)}>Company <span className="menu-ellipse"><img src='./Images/Ellipse 1.svg' /></span></Link>
                                    <Link href='#services' className='menu-link' onClick={() => setOpenMenu(false)}>Services <span className='menu-ellipse'><img src='./Images/Ellipse 1.svg' /></span></Link>
                                    <Link href='#portfolio' className='menu-link' onClick={() => setOpenMenu(false)}>Portfolio <span className='menu-ellipse'><img src='./Images/Ellipse 1.svg' /></span></Link>
                                    <Link href='#career' className='menu-link' onClick={() => setOpenMenu(false)}>Career <span className='menu-ellipse'><img src='./Images/Ellipse 1.svg' /></span></Link>
                                    <Link href='#contactUs' className='menu-link mobile-view-contact-us-menu' onClick={() => setOpenMenu(false)}>Contact Us <span className='menu-ellipse'><img src='./Images/Ellipse 1.svg' /></span></Link>
                                </Stack>
                            </Box>
                        </Grid>
                        <Grid lg={3} md={4} sm={4} xs={12}>
                            <Box className="contact-menu">
                                <Button href='#contactUs' variant='contained' className="contact-menu-btn">Contact Us</Button>
                            </Box>
                        </Grid>

                        <Box className='mobile-navbar-hamburger-menu'>
                            <MenuIcon name="menu-outline" className='mobile-nav-icon' onClick={() => setOpenMenu(true)} />
                            <CloseIcon name="close-outline" className='close-outline mobile-nav-icon' onClick={() => setOpenMenu(false)} />
                        </Box>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default Header