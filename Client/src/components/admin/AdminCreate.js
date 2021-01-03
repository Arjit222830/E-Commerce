import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { createAdmin } from '../../actions';
import AdminForm from './AdminForm'

const AdminCreate = (props)=> {

    useEffect(() => {
        console.log(props);
    });


    const onSubmit= (formValues) => {
        console.log(props);
        console.log(formValues);
        props.createAdmin(formValues);
    }

    return (
        <div>
            <h3>Create a Admin</h3>
            <AdminForm onSubmit={onSubmit} />
        </div>
    );
}

export default connect(null,{createAdmin}) (AdminCreate);
