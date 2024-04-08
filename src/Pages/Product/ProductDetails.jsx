import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { apiData } from '../../utils/api/ProductApi';
import './ProductDetails.css';

export const ProductDetails = () => {
    const [cart, setCart] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const product = apiData.find(item => item.id === parseInt(id));
    const isAuthenticated = localStorage.getItem('accessToken');


    const handleAddToCart = () => {
        if(isAuthenticated){
            setCart(true);
        }else {
            alert('Please login to access the cart.');
            navigate('/');
        }
    }

    const handleGoToCart = () => {
        // Check if the user is authenticated
        if (isAuthenticated) {
            navigate(`/cart/${product.id}`)
            // navigate(`/cart/${id}`, { state: { product } });

        } else {
            alert('Please login to access the cart.');
            navigate('/');
        }
    }

    return (
        <div className='view_Product'>
            <h1>Product Details:</h1>
            <div className='products'>
            <div className="product_img">
                <img src={product.thumbnail} alt="product" height={420} />
            </div>
            <div className='product_Dettails'>
                <h2>{product.title}</h2>
                <p>{product.description} </p>
                <h3>₹{product.price}</h3>
                <div className="buttons">
                    {!cart ? (
                        <button onClick={handleAddToCart}>Add To Cart</button>
                    ) : (
                        <button onClick={handleGoToCart}>Go to Cart</button>
                    )}
                    <button>Buy Now</button>
                </div>
            </div>
            </div>
          
        </div>
    );
}
