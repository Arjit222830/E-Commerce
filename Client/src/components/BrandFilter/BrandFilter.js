import React, { useEffect} from 'react';
import {connect} from 'react-redux';
import './BrandFilter.scss';
import {brands} from "../../data/brands";
import {addBrandToFilter, removeBrandFromFilter, fetchAdmins} from "../../actions";

const BrandFilter = (props) => {

    useEffect(() => {
        props.fetchAdmins();  
        console.log(props);  
    },[]);

    const {brandItemsCount} = props;


    const handleSelectBox = (e) => {
        console.log(props.state);  
        const name = e.target.name;
        console.log(e.target.name);
        if(e.target.checked) 
            props.addBrandToFilter(name);
        else 
            props.removeBrandFromFilter(name);
    };


    return (
        <div className="card mb-3">
            <div className="card-header">
                <h3>Brands</h3>
            </div>
            <ul className="list-group flex-row flex-wrap">
                {brands.map(brand => (
                    <li key={brand} className="list-group-item flex-50">
                        <label className="custom-checkbox text-capitalize"> {brand} ({brandItemsCount[brand]})
                            <input type="checkbox"
                                    name={brand}
                                    className="custom-checkbox__input" onInput={handleSelectBox}/>
                            <span className="custom-checkbox__span"></span>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );

};

const mapStateToProps = (state) => {

    const brandItemsCount = {};
    console.log(state);
    Object.values(state.admin).forEach(p => {
        console.log(brandItemsCount[p.brand]);
        brandItemsCount[p.brand] = brandItemsCount[p.brand] + 1 || 1;
    });


    return {
        brandItemsCount,
        state
    }

};

export default connect(mapStateToProps,{fetchAdmins,addBrandToFilter,removeBrandFromFilter})(BrandFilter);