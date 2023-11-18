import React from 'react';
import "./ServiceCard.css";
import { Grid, Box, Paper, Typography, Stack } from '@mui/material';

const ServiceCard = ({ imgSrc, title, description }) => {
    return (
        <>
            <Grid item lg={4} md={4} sm={6} xs={12} className='services-card-items-div'>
                <Box className="services-card-item-parent-div">
                    <Paper className='services-card-item-child-div'>
                        <img src={imgSrc} alt={title} className='services-card-each-item-image' />
                        <Box className="services-card-details">
                            <Typography display="block" variant='h4' gutterBottom className='service-card-each-item-name'>
                                {title}
                            </Typography>
                            <Typography display="block" className='services-card-each-item-description'>
                                {description}
                            </Typography>
                        </Box>
                    </Paper>
                </Box>
            </Grid>
        </>
    )
}

export default ServiceCard