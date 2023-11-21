import React from 'react';
import "./Industries.css";
import { Container, Typography, Grid, Card, CardHeader, CardContent, Box, Paper, Button } from '@mui/material';
import IndustriesCard from './IndustriesCard';

const Industries = () => {
    const IndustriesData = [
        {
            id: 1,
            name: "Real estate",
            image: './Images/image 13.svg',
        },
        {
            id: 2,
            name: "Tour & Travels",
            image: "./Images/image 14.svg",
        },
        {
            id: 3,
            name: "Real estate",
            image: './Images/image 13.svg',
        },
        {
            id: 4,
            name: "Real estate",
            image: "./Images/image 13.svg",
        },
        {
            id: 5,
            name: "Tour & Travels",
            image: './Images/image 14.svg',
        },
        {
            id: 6,
            name: "Real estate",
            image: "./Images/image 13.svg",
        },
        {
            id: 7,
            name: "Real estate",
            image: './Images/image 13.svg',
        },
        {
            id: 8,
            name: "Tour & Travels",
            image: "./Images/image 14.svg",
        },
        {
            id: 9,
            name: "Real estate",
            image: './Images/image 13.svg',
        },
        {
            id: 10,
            name: "Real estate",
            image: "./Images/image 13.svg",
        },
        {
            id: 11,
            name: "Tour & Travels",
            image: './Images/image 14.svg',
        },
        {
            id: 12,
            name: "Real estate",
            image: "./Images/image 13.svg",
        },
    ]
    return (
        <>
            <Container maxWidth="lg" >
                <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12} className='industries-main-div'>
                        <Card className='industries-card-div'>
                            <CardHeader className='industries-card-main-header' title="Industries We Serve"
                            />

                            <CardContent className='industries-card-content-div'>
                                <Typography color="textSecondary" gutterBottom className='industries-card-content-inner-div'>
                                    Our design process follows a proven approach. We begin with a deep 
                                    understanding of your needs and create a planning template.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                <Grid container className='industries-list-div'>
                    {
                        IndustriesData.map((item) => {
                            const { id, name, image } = item;
                            return <IndustriesCard key={id} title={name} imgSrc={image} />
                        })
                    }
                </Grid>
            </Container>
        </>
    )
}

export default Industries