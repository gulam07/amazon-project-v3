import React from 'react'
import './Head.css';

function Head() {
    return (
        <div className="head"> 
            <div className="head__nav">
            <span className="head__optionLineOne">All</span>
            <span className="head__optionLineOne">Mobiles</span>
            <span className="head__optionLineOne">Best Sellers</span>
            <span className="head__optionLineOne">Electronics</span>
            <span className="head__optionLineOne">Fashion</span>
            <span className="head__optionLineOne">Customer Service</span>
            <span className="head__optionLineOne">Prime</span>
            <span className="head__optionLineOne">Amazon Pay</span>
            <span className="head__optionLineOne">Todays Deals</span>
            <span className="head__optionLineOne">Computers</span>
            </div>
            <div className="head__side">
            <span className="head__optionLineTwo">Great Indian Festival</span>
            <span className="head__optionLineTwo">SHOP NOW</span>
            </div>
            
        </div>
    )
}

export default Head
