import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import ProductDetailComponent from '../../components/ProductDetail/ProductDetail';
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import {fetchAdmins} from "../../actions";

const ProductDetail = (props) => {

    useEffect(() => {
        props.fetchAdmins();  
        console.log(props.product);  
    },[]);

    if(!props.product)
        return "loading"

    return (
        <div className="container" style={{padding: '6rem 0'}}>
            <div className="card">
                <div className="row">
                    <ProductSlider images={props.product.images}/>
                    <ProductDetailComponent product={props.product}/>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) =>  {

    console.log(state)
    const product = state.admin[ownProps.match.params.id]
    console.log(product);
    return {
        product
    }
};



export default connect(mapStateToProps, {fetchAdmins})(ProductDetail);
