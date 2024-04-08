import React from 'react';
import { useParams } from 'react-router-dom';
import { apiData } from '../../utils/api/ProductApi';
import './CartPage.css'

const CartPage = () => {
    // const { id, title, description, price } = useParams();
    const { id } = useParams();
    const product = apiData.find(item => item.id === parseInt(id));
    return (
        <div className='cart_container'>
            <h1>Cart Page</h1>
            <div className='all_detail'>
            <div className='img'>
                <img src={product.thumbnail} alt="productimg" height={420}/>
            </div>
            <div className="details">
            <h2>Title: {product.title}</h2>
            <p>Description: {product.description}</p>
            <p>Price: ₹{product.price}</p>
            <button className='buy_btn'>BuyNow</button>
            </div>
            </div>
            {/* <h2>Product ID: {product.id}</h2> */}
         
           
        </div>
    );
};

export default CartPage;
