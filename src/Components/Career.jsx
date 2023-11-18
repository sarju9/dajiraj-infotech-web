import { Container, Grid, Typography, Button, Box } from '@mui/material'
import React from 'react';
import "./Career.css";

const Career = () => {
    return (
        <>
            <Container maxWidth="lg" id="career">
                <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12} className='career-main-div'>
                        <Box className="career-content-div">
                            <Typography display="block" variant='h3' gutterBottom className='career-title'>
                                Hire World-Class Developers
                            </Typography>
                            <Box className="career-main-btn-div">
                                <Button variant='contained' className="career-hire-now-btn">Hire Now</Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Career