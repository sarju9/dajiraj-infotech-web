import React from 'react'
import { Divider, Container, Box, Typography, Grid, Card, CardHeader, CardContent, Paper, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import './CompanyDetails.css';

const CompanyDetails = () => {
    return (
        <>
            <Container maxWidth="lg" id="company" className='comapany-details-main-div'>
                <Grid container >
                    <Grid item lg={7} md={6} sm={6} xs={12} className='left-side-section'>
                        <Card className='comapny-details-card-main-div'>
                            <CardHeader title="WE ARE DAJIRAJ INFOTECH"
                                titleTypographyProps={{ variant: 'subtitle2' }} className='comapny-details-card-main-header' />
                            <CardHeader title="Top-rated Web And Mobile App"
                                titleTypographyProps={{ variant: 'h4' }} className='comapny-details-card-inner-header' />
                            <CardHeader title="Design and Development Agency" titleTypographyProps={{ variant: 'h4' }} className='comapny-details-card-inner-header' />

                            <CardContent className='comapny-details-card-content-div'>
                                <Typography color="textSecondary" gutterBottom className='comapny-details-card-content-inner-div'>
                                    In the fast-changing technological landscape, one thing never <br />
                                    changes. Your website is the face of your business and your app is <br />
                                    your most valuable asset. We at Devoq design believe in helping you <br />
                                    put your best foot forward. And this is why we are a top-rated web <br />
                                    and mobile app development company helping businesses with 360- <br />
                                    degree solutions from UI/UX Design, Web Development, App <br />
                                    Development, and DevOps Solutions.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item lg={5} md={6} sm={6} xs={12} className="right-side-section">
                        <Box className="main-projects-team-support-clients-div">
                            <Box className="projects-clients-box-div">
                                <Grid container>
                                    <Grid item lg={6} md={6} sm={6} xs={12} className='first-div-projects'>
                                        <Box className="projects-parent-div">
                                            <Stack direction="row" spacing={2}>
                                                <Paper className='projects-child-div'>
                                                    <Typography display="block" variant='h3' gutterBottom className='projects-primary-content'>80<AddIcon className='projects-add-icon' />
                                                        <Typography className='projects-secondary-content'>Projects</Typography>
                                                    </Typography>
                                                </Paper>
                                            </Stack>
                                        </Box>
                                    </Grid>

                                    <Grid item lg={6} md={6} sm={6} xs={12} className='second-div-clients'>
                                        <Box className="clients-parent-div">
                                            <Stack direction="row" spacing={2}>
                                                <Paper className='clients-child-div'>
                                                    <Typography display="block" variant='h3' gutterBottom className='clients-primary-content'>55<AddIcon className='clients-add-icon' />
                                                        <Typography className='clients-secondary-content'>Clients</Typography>
                                                    </Typography>
                                                </Paper>
                                            </Stack>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>

                            <Box className="team-support-box-div">
                                <Grid container>
                                    <Grid item lg={6} md={6} sm={6} xs={12} className='third-div-team'>
                                        <Box className="team-parent-div">
                                            <Stack direction="row" spacing={2}>
                                                <Paper className='team-child-div'>
                                                    <Typography display="block" variant='h3' gutterBottom className='team-primary-content'>15<AddIcon className='team-add-icon' />
                                                        <Typography className='team-secondary-content'>Team</Typography>
                                                    </Typography>
                                                </Paper>
                                            </Stack>
                                        </Box>
                                    </Grid>

                                    <Grid item lg={6} md={6} sm={6} xs={12} className='fourth-div-support'>
                                        <Box className="support-parent-div">
                                            <Paper className='support-child-div'>
                                                <Typography display="block" variant='h3' gutterBottom className='support-primary-content'>27/7
                                                    <Typography className='support-secondary-content'>Support</Typography>
                                                </Typography>
                                            </Paper>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default CompanyDetails