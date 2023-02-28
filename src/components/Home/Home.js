import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className='home-container d-flex'>
            <div className="home-title col-md-7">
                <h2>This Home </h2>
            </div>

            <div className="home-image col-md-4">
                <h2>image</h2>
                <img src='home-image.png' alt=""/>

            </div>
        </div>
    );
};

export default Home;