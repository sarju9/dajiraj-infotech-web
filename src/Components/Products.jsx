import React from 'react'
import { Grid, Toolbar, Typography, Button, Box, Stack, CardContent, Card, CardHeader, Container } from '@mui/material';
import "./Products.css";

const Products = () => {

    const ProductsData = [
        {
            id: 1,
            name: "Deal Buddy",
            image: "./Images/Dealbuddy.svg",
        },
        {
            id: 2,
            name: "Zo",
            image: "./Images/Zo.svg",
        },
        {
            id: 3,
            name: "Ack Plus",
            image: "./Images/AckPlus.svg",
        },
        {
            id: 4,
            name: "Speed Link",
            image: "./Images/Speedlink.svg",
        },
    ]

    const ProductCard = ({ altName, imgSrc }) => {
        return (
            <>
                <Grid item lg={3} md={3} sm={6} xs={12}>
                    <Box className="products-image-div">
                        <img src={imgSrc} alt={altName} className='products-image' />
                    </Box>
                </Grid>
            </>
        )
    }

    return (
        <>
            <Container maxWidth="lg">
                <Grid container className='product-main-div'>

                    {
                        ProductsData.map((item) => {
                            const { id, name, image } = item;
                            return <ProductCard key={id} altName={name} imgSrc={image} />
                        })
                    }

                </Grid>
            </Container>
        </>
    )
}

export default Products