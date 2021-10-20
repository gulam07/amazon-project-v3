import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div classNmae="home__container">
                <img className="home__image" src="https://m.media-amazon.com/images/I/71PdsxjbjPL._SX3000_.jpg" alt=""/>
            </div>
            <div className="home__row">
                <Product />
                {/* <Product />
                <Product /> */}

            </div>
            
        </div>
    )
}

export default Home
