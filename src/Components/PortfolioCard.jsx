import React from 'react';
import "./PortfolioCard.css";
import { Grid, Box, Paper, Typography } from '@mui/material';

const PortfolioCard = ({ imgSrc, title }) => {
    return (
        <>
            <Grid item lg={3} md={3} sm={6} xs={12} className='portfolio-card-items-div'>
                <Box className="portfolio-card-item-parent-div">
                    <Paper className='portfolio-card-item-child-div'>
                        <img src={imgSrc} alt={title} className='portfolio-card-each-item-image' />
                        <Box className="portfolio-card-details">
                            <Typography display="block" variant='h4' gutterBottom className='portfolio-card-each-item-name'>
                                {title}
                            </Typography>
                        </Box>
                    </Paper>
                </Box>
            </Grid>
        </>
    )
}

export default PortfolioCard