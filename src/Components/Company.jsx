import React from 'react'
import { Grid, Toolbar, Typography, Button, Box, Stack, CardContent, Card, CardHeader, Container } from '@mui/material';
import "./Company.css";

const Company = () => {
    return (
        <>
            <Container maxWidth="lg" id="home">
                <Grid container className='company'>
                    <Grid item lg={7} md={6} sm={6} xs={12} >
                        <Card className='comapny-text-card-div'>
                            <CardHeader title="Creating the Perfect" className='card-header' />
                                <img src='./Images/Ellipse 2.svg' alt='ellipse 2' className='company-ellipse' />
                            <CardHeader title="Harmony for Your Digital" className='card-header ellipse' />
                            <CardHeader title="Solutions." className='card-header' />

                            <CardContent className='card-content-div'>
                                <Typography color="textSecondary" gutterBottom className='card-content'>
                                    We're the award winning UI-UX agency, who create digital products that
                                    people love to use. Our work is driven by a deep understanding of how
                                    people interact with technology. We take a user-centered approach to
                                    design, which means we start every project by trying to understand the
                                    needs of the people who will be using our products.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item lg={5} md={6} sm={6} xs={12}>
                        <Box className='company-image-div'>
                            <img src='./Images/Main Front.svg' className='company-image' />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Company