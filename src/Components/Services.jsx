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
                                titleTypographyProps={{ variant: 'h3' }} />

                            <CardContent className='services-card-content-div'>
                                <Typography color="textSecondary" gutterBottom className='services-card-content-inner-div'>
                                    We offer end-to-end services in the IT domain ranging from customized mobile app <br />
                                    development to enterprise web development.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                <Grid container>
                    {
                        ServiceData.map((item) => {
                            const { id, name, description, image } = item;
                            return <ServiceCard key={id} imgSrc={image} title={name} description={description} />
                        })
                    }



                    {/* <Grid item lg={4} md={4} sm={12} xs={12} className='services-items-div'>
                        <Box className="item-parent-div">
                            <Paper className='item-child-div'>
                                <img src='./Images/image 7.svg' alt="image" className='services-each-item-image' />
                                <Box className="services-card-details">
                                    <Typography display="block" variant='h4' gutterBottom className='service-each-item-name'>Mobile App Development</Typography>
                                    <Typography display="block" className='services-each-item-description'>
                                        We make catchy, handy, user-friendly utility apps for android, ios and tablets.
                                    </Typography>
                                </Box>
                            </Paper>
                        </Box>
                    </Grid> */}

                    {/* <Grid item lg={4} md={4} sm={12} xs={12} className='first-three-item--div'>
                        hi
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12} className='first-three-item--div'>
                        hi
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12} className='first-three-item--div'>
                        hi
                    </Grid> */}
                </Grid>
            </Container>
        </>
    )
}

export default Services