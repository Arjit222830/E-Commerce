import React,{useEffect} from 'react';
import Admin from './Admin.js';
import _ from 'lodash';
import { connect } from 'react-redux';

const AdminInfo = (props) => {

    console.log(props.admin_info);

    const {
        title,
        brand,
        price,
        cpu,
        camera,
        size,
        display,
        battery,
        memory,
        description,
        _id
    } = props.admin_info;

    return (
        <>
            <Admin admin_info={props.admin_info} key={_id}/>
            <aside className="col-sm-7">
                <article className="card-body p-5">
                    <h3 className="title mb-3">{title}</h3>

                    <p className="price-detail-wrap">
                        <span className="price h3 text-warning">
                            <span className="currency">$</span>
                            <span className="num">{price}</span>
                        </span>
                    </p>
                    <dl className="item-property">
                        <dt>Description</dt>
                        <dd><p className="text-capitalize">{description}</p></dd>
                    </dl>
                    <dl className="param param-feature">
                        <dt>Brand</dt>
                        <dd className="text-capitalize">{brand}</dd>
                    </dl>
                    <dl className="param param-feature">
                        <dt>Size</dt>
                        <dd>{size}</dd>
                    </dl>
                    <dl className="param param-feature">
                        <dt>Camera</dt>
                        <dd>{camera}</dd>
                    </dl>
                    <dl className="param param-feature">
                        <dt>CPU</dt>
                        <dd>{cpu}</dd>
                    </dl>
                    <dl className="param param-feature">
                        <dt>Memory</dt>
                        <dd>{memory}</dd>
                    </dl>
                    <dl className="param param-feature">
                        <dt>Display</dt>
                        <dd>{display}</dd>
                    </dl>
                    <dl className="param param-feature">
                        <dt>Battery</dt>
                        <dd>{battery}</dd>
                    </dl>
                    <hr/>
                    <hr/>
                </article>
            </aside>
        </>
    );
};

const mapStateToProps= (state, ownProps)=>{
    console.log(state)
    return {
        admin_info: state.admin[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps)(AdminInfo);