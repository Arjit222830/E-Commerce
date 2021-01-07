import React from 'react';
import {connect} from 'react-redux';
import {formatMoney} from "../../pipes/priceFormatter";
import CartItem from "../../components/CartItem/CartItem";
import axios from "../../apis/axios"

const ShoppingCart = (props) => {

    const razorpay= async()=>{
        const res= await axios.post('/payment/orders',{amount:props.totalPrice*100});
        const order_id= res.data;
        console.log(order_id);
        var options = {
            "key": "rzp_test_stgeaUiidb3JxB", // Enter the Key ID generated from the Dashboard
            "amount": props.totalPrice*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "E-Commerce",
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "handler":  async(response)=>{
                const res = await axios.post('/payment',response);
                if(!res)
                    alert("Oops.. Some Problem");

                alert(res.data);
            },
            "prefill": {
                "name": "Arjit Bhandari",
                "email": "arjitbhandari222830@gmail.com",
                "contact": "9456300762"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        const _window = window;
        const paymentObject = new _window.Razorpay(options);
        paymentObject.open();
    }

    return (
        <>
                <div className="container" style={{paddingTop: '6rem'}}>
                    <div className="card shopping-cart">
                        <div className="card-header bg-dark text-light">
                            <i className="fa fa-shopping-cart pr-2" aria-hidden="true"></i>
                            Shipping cart
                            <div className="clearfix"></div>
                        </div>
                        <div className="card-body">
                            {props.cartItemCount ? props.cartItems.map(cart => (
                                <CartItem {...cart} img={cart.images[0]} />
                            )) : <h1 className="display-4 mt-5 text-center">There is no product in your cart</h1> }
                        </div>
                        <div className="card-footer">
                            <div className="pull-right" style={{margin: '10px'}}>
                                <div className="pull-right" style={{margin: '5px'}}>
                                    Total price: <b>{formatMoney(props.totalPrice)}€</b>
                                </div>
                            </div>
                            {/*<div className="pull-right" style={{margin: '10px'}}>
                                <div className="pull-right" style={{margin: '5px'}}>
                                    <button onClick={()=> razorpay()} className="btn btn-primary">Pay</button>                                
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </>
    );
};


const mapStateToProps = state => {

    console.log(state, 'state has changed');

    return {
        cartItems: state.shop.cart,
        cartItemCount: state.shop.cart.reduce((count, curItem) => {
            return count + curItem.quantity;
        }, 0),
        totalPrice: state.shop.cart.reduce((count, curItem) => {
            return count + (curItem.price * curItem.quantity);
        }, 0)
    }
}

export default connect(mapStateToProps, null)(ShoppingCart);
