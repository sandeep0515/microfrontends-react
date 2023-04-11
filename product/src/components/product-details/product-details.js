import React from 'react';
import ProductCard from '../product-card';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ProductDetails = (props) => {
    const products = [
        {
            id: 1,
            title: 'Playstation 5',
            description: 'Sony Playstation 5',
            src: '../../../assets/images/ps5.png'
        },
        {
            id: 2,
            title: 'Xbox S',
            description: 'Xbox Series S',
            src: '../../../assets/images/xbox.png'
        },
        {
            id: 1,
            title: 'Playstation 5',
            description: 'Sony Playstation 5',
            src: '../../../assets/images/ps5.png'
        },
        {
            id: 2,
            title: 'Xbox S',
            description: 'Xbox Series S',
            src: '../../../assets/images/xbox.png'
        },
        {
            id: 1,
            title: 'Playstation 5',
            description: 'Sony Playstation 5',
            src: '../../../assets/images/ps5.png'
        },
        {
            id: 2,
            title: 'Xbox S',
            description: 'Xbox Series S',
            src: '../../../assets/images/xbox.png'
        },
        {
            id: 1,
            title: 'Playstation 5',
            description: 'Sony Playstation 5',
            src: '../../../assets/images/ps5.png'
        },
        {
            id: 2,
            title: 'Xbox S',
            description: 'Xbox Series S',
            src: '../../../assets/images/xbox.png'
        }
    ]
    return (<div><Grid container direction="row"
    spacing={2}>
        {
            products.map(item => <Grid item xs={2}><ProductCard key={item.id} item={item}></ProductCard></Grid>)
        }
    </Grid>
    </div>)
}

export default ProductDetails;