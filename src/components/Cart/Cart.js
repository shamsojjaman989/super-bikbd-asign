import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {name, id, price, img, seller} = props.bike;
    return (
        <div className='cart-container'>
            <img src={img} alt="" />
            {name}
            <p>Seller: {seller}</p>
            <p>Price: ${price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default Cart;