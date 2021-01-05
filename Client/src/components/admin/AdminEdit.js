import React,{useEffect} from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchAdmin,  editAdmin } from '../../actions';
import AdminForm from './AdminForm';

const AdminEdit = (props)=> {

    useEffect(() => {
        console.log(props);
    
        props.fetchAdmin(props.match.params.id);
    },[]);

    const onSubmit= (formValues)=> {
        props.editAdmin(props.match.params.id, formValues);
    };

    if(props.admin)
        return <div>Loading...</div>

    return (
        <div>
            <h3>Edit a Admin</h3>
            <AdminForm initialValues={_.pick(props.admin_id, 'title','category','images','brand','price','cpu','camera','size','weight','display','battery','memory','description')} onSubmit={onSubmit} />
        </div>
    );
}

const mapStateToProps= (state, ownProps)=>{
    console.log(state)
    return {
        admin_id: state.admin[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps,{fetchAdmin, editAdmin})(AdminEdit);