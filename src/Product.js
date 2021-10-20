import React from 'react'
import './Product.css'

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>this is my book</p>
                <p className="product__price">
                    <bold>₹</bold>
                    <strong>3119027</strong>
                </p>
                <img className="product__image" src="https://m.media-amazon.com/images/I/61KeIxmldLL._SL1500_.jpg" alt=" " />

            </div>
            <button className="product__button">Add to Cart</button>
            
        </div>
    )
}

export default Product
