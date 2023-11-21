import React from 'react'
import ServiceCard from './ServiceCard';
import { Container, Typography, Grid, Card, CardHeader, CardContent } from '@mui/material';
import "./Services.css";

const Services = () => {

    const ServiceData = [
        {
            id: 1,
            name: "Mobile App Development",
            description: "We make catchy, handy, user-friendly utility apps for android, ios and tablets.",
            image: "./Images/image 7.svg",
        },
        {
            id: 2,
            name: "Web Development",
            description: "We make catchy, handy, user-friendly utility apps for android, ios and tablets.",
            image: "./Images/image 8.svg",
        }, {
            id: 3,
            name: "UI/UX Design",
            description: "We make catchy, handy, user-friendly utility apps for android, ios and tablets.",
            image: "./Images/image 9.svg",
        }, {
            id: 4,
            name: "DevOps Solutions",
            description: "We make catchy, handy, user-friendly utility apps for android, ios and tablets.",
            image: "./Images/image 10.svg",
        }, {
            id: 5,
            name: "Quality Assurance",
            description: "We make catchy, handy, user-friendly utility apps for android, ios and tablets.",
            image: "./Images/image 11.svg",
        },
        {
            id: 6,
            name: "Artificial Intelligence",
            description: "We make catchy, handy, user-friendly utility apps for android, ios and tablets.",
            image: "./Images/image 12.svg",
        },
    ]

    return (
        <>
            <Container maxWidth="lg" id="services">
                <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12} className='services-main-div'>
                        <Card className='services-card-div'>
                            <CardHeader className='services-card-main-header' title="See what we can do for you"
                            />

                            <CardContent className='services-card-content-div'>
                                <Typography color="textSecondary" gutterBottom className='services-card-content-inner-div'>
                                    We offer end-to-end services in the IT domain ranging from customized mobile app 
                                    development to enterprise web development.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                <Grid container className='services-card-data'>

                    {
                        ServiceData.map((item) => {
                            const { id, name, description, image } = item;
                            return <ServiceCard key={id} imgSrc={image} title={name} description={description} />
                        })
                    }

                </Grid>
            </Container>
        </>
    )
}

export default Services