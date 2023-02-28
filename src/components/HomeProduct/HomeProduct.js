import React from 'react';
import './HomeProduct.css'


const HomeProduct = (props) => {
    const {name, price, seller, img} = props.product;
    return (
        <div className='home-container'>
            <div className="home-item">
            <img src={img} alt="" />
            {name}
            <p>Price: ${price}</p>
            </div>



            
        </div>
    );
};

export default HomeProduct;