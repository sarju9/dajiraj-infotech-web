import React from 'react'
import { Container, Typography, Grid, Card, CardHeader, CardContent, Box, Paper, Button } from '@mui/material';
import "./Portfolio.css";
import PortfolioCard from './PortfolioCard';

const Portfolio = () => {
    const PortfolioData = [
        {
            id: 1,
            name: "DealBuddy",
            image: "./Images/image 5.svg",
        },
        {
            id: 2,
            name: "Zo",
            image: "./Images/image 2.svg",
        },
        {
            id: 3,
            name: "DealBuddy",
            image: "./Images/image 5.svg",
        },
        {
            id: 4,
            name: "Zo",
            image: "./Images/image 2.svg",
        },
        {
            id: 5,
            name: "DealBuddy",
            image: "./Images/image 5.svg",
        },
        {
            id: 6,
            name: "Zo",
            image: "./Images/image 2.svg",
        },
        {
            id: 7,
            name: "DealBuddy",
            image: "./Images/image 5.svg",
        },
        {
            id: 8,
            name: "Zo",
            image: "./Images/image 2.svg",
        },
    ]
    return (
        <>
            <Container maxWidth="lg" className='portfolio-parent-div' id="portfolio">
                <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12} className='portfolio-main-div'>
                        <Card className='portfolio-card-div'>
                            <CardHeader className='portfolio-card-main-header' title="Our Selected Work"
                                titleTypographyProps={{ variant: 'h3' }} />

                            <CardContent className='portfolio-card-content-div'>
                                <Typography color="textSecondary" gutterBottom className='portfolio-card-content-inner-div'>
                                    Here is a glimpse of our work that says the story of our focused approach and <br />
                                    dedicated efforts to meet the client’s business requirements.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                <Grid container>
                    {
                        PortfolioData.map((item) => {
                            const { id, name, image } = item;
                            return <PortfolioCard key={id} imgSrc={image} title={name} />
                        })
                    }
                </Grid>

                <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12} className='portfolio-view-more-main-div'>
                        <Box className="portfolio-view-more-btn-div">
                            <Button variant='contained' className='portfolio-view-more-btn'>View More</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Portfolio