import React from 'react'
import "./IndustriesCard.css";
import { Grid, Box, Paper, Typography } from '@mui/material';

const IndustriesCard = ({ title, imgSrc }) => {
    return (
        <>
            <Grid item lg={4} md={4} sm={6} xs={12} className='industries-card-items-div'>
                <Box className="industries-card-item-parent-div">
                    <Paper className='industries-card-item-child-div'>
                        <Box className="industries-card-img-div">
                            <img src={imgSrc} alt={title} className='industries-card-each-item-image' />
                        </Box>
                        <Box className="industries-card-details">
                            <Typography display="block" variant='h4' gutterBottom className='industries-card-each-item-name'>
                                {title}
                            </Typography>
                        </Box>
                    </Paper>
                </Box>
            </Grid>
        </>
    )
}

export default IndustriesCard