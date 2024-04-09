import React, { useContext, useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { apiData } from '../../utils/api/ProductApi';
import './ProductList.css';

const ProductList = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                setProduct(apiData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);


    return (
        <div className='all_product'>
            <div className="product">
                <h1>All Products</h1>
            </div>
            <div className="card_container">
            {product.map(item => (
                    <Link to={`/productdetails/${item.id}`} key={item.id} style={{textDecoration:"none"}}> 
                        <Card sx={{ maxWidth: 345 } } >
                            <CardMedia
                                sx={{ height: 300 }}
                                image={item.thumbnail}
                                alt={item.name}
                                title="Product Image"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">₹{item.price}</Button>
                            </CardActions>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
