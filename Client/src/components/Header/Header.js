import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import GoogleAuth from "../../components/Auth/GoogleAuth";
import {fetchAdmins} from "../../actions";

const Header = (props) => {

    useEffect(()=>{
        props.fetchAdmins();
        console.log(props);
    },[]);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <NavLink className="navbar-brand" to="/">Ecommerce</NavLink>
                    <GoogleAuth />
                
                <div>
                    
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">    
                                        
                            <NavLink className="nav-link" to={"/cart"}><i className="fa fa-shopping-cart mr-2" aria-hidden="true" />
                                Cart {props.cartLength ? `(${props.cartLength})`: ''}
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};


const mapStateToProps = (state) => {
    console.log(state)
  return {
      cartLength: state.shop.cart.length
  }
};

export default connect(mapStateToProps, {fetchAdmins})(Header);


/*
*                         <li className="nav-item active">
                            <a className="nav-link" href="#">Home
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
* */