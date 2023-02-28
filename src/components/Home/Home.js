import React from 'react';
import { Link } from 'react-router-dom';
import useBike from '../../hooks/CustomHooks/useBike';
import HomeProduct from '../HomeProduct/HomeProduct';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useBike();
    // if(products.ratingsCount <= 1000){
    //     setProducts(products);
    // }
    // else
    return (
        <div className="main-home">
            <div className='home-container d-flex'>
            <div className="home-title col-md-7 ">
                <div className="titles w-75">
                <h2>YOU CHOOSE YOUR DREAM !!</h2>
                <h1 className='dream-heading'>YOU CAN BUY YOUR DREAM</h1>
                <p>Everyone loves to ride a bike from childhood onwards. 
                    Right now, even girls are very crazy about bike riding, and some 
                    girls addict to buy a new variety of Bikes. Bike Lovers definitely 
                    share their love for Bikes & Bike Rides on Instagram by posting their
                     bike adventure videos or photos.</p>
                     <button className='live-button'>Live Now</button>
                </div>
                
            </div>

            <div className="home-image col-md-4">           
                <img src='home-image.png' alt=""/>
            </div>
        </div>
        <div className="reviews">
            <h2>Hot Products are....!{products.length}</h2>
            <div className="product-items">
                {
                    products.filter(product=> product.ratingsCount >= 1500).map(bikes =><HomeProduct
                        key={bikes.id}
                        product = {bikes}
                    ></HomeProduct>)
                }
                
            </div>
            <Link to='/reviews'><button className='view-all-button'>View All</button></Link>
        </div>
        </div>
    );
};

export default Home;