import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './product-card.scss';

const ProductCard = (props) => {
  return (
    <Card>
      <CardContent>
        <div className="product-content">
          <img src={props.item.src} className="productImage" />
          <Typography variant="body2">
            {props.item.description}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;