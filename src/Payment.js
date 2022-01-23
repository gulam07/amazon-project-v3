import React,{useState} from 'react'
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css";
import { useStateValue } from './StateProvider';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getCartTotal } from './reducer';
import CurrencyFormat from 'react-currency-format';
function Payment() {
    const [{ cart, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [processing,setProcessing] = useState("");
    const [succeeded,setSucceeded] =useState(false)

    const handleSubmit = e => {

    }

    const handleChange = e => {
        setDisabled(event.empty);
        setError(Event.error ? Event.error.message : "");

    }

    return (
        <div className="payment">
            <div className="payment__container">
                {/*Delivery Address*/}
                <div className="payment__section">
                    <div className="payment__section">
                        <h3>Delivery Address:</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>Flat No.301, Hiranandani</p>
                        <p>Andheri,India</p>
                    </div>

                </div>
                {/*Cart Review*/}
                <div className="payment__section">
                    <div className="payment__section">
                        <h3>Review your Item in Cart:</h3>
                    </div>
                    <div className="payment__item">
                        {cart.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                            />
                        ))}
                    </div>

                </div>
                {/*Payment Gateway*/}
                <div className="payment__section">
                    <div className="payment__section">
                        <h3>Payment Method:</h3>
                    </div>
                    <div className="payment__details">
                        {/* Stripe Secret Code */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <p>Subtotal ({cart.length} items): <strong>{value}</strong></p>
                                            <small className="subtotal__gift">
                                                <input type="checkbox" /> This is order contains a gift

                                            </small>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getCartTotal(cart)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₹"}
                                />
                                <button disabled ={processing || disabled ||succeeded} >
                                    <span>{processing ? <p>Processing</p> :"Buy Now"}</span>
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Payment
