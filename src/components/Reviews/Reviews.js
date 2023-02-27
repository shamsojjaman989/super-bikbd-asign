import React from 'react';
import useBike from '../../hooks/CustomHooks/useBike';
import Cart from '../Cart/Cart';
import './Reviews.css'

const Reviews = () => {
    const [products, setProducts] = useBike();
    return (
        <div>
            <h3>Reviews:{products.length}</h3>
            <div className="review-cart">
                {
                    products.map(bike =><Cart
                    bike ={bike.id}
                    bike = {bike}
                    ></Cart>)
                }
            </div>

        </div>
    );
};

export default Reviews;