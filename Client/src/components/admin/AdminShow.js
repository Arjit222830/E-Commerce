import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAdmins, deleteAdmin } from '../../actions';
import axios from '../../apis/axios';

const AdminList= (props)=> {

    useEffect(() => {
        console.log(props);
        props.fetchAdmins();    
    },[]);

    const renderActions= (id)=>{
        console.log(id);
        return (
            <React.Fragment>
                <button  type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button onClick={()=> props.deleteAdmin(id)} type="button" className="btn btn-primary">Delete</button>
            </React.Fragment>
        );
    }

    const Modal= (action,title,id)=>{

        return (
            <>
                <div className="modal fade" id={`exampleModal${id}`} tabIndex="-1" aria-labelledby={`exampleModalLabel${id}`} aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id={`exampleModalLabel${id}`}>{action}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                Are you want to delete the stream with title: {title}
                            </div>
                            <div className="modal-footer">
                                {renderActions(id)}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    const renderAdmin= (admin,title,id)=> {
        return (
            <div className="right floated content">
                <Link to={`/admin/edit/${id}`} className="ui button primary">
                    Edit
                </Link>

                <button type="button" className="ui button negative" data-toggle="modal" data-target={`#exampleModal${id}`}>
                    Delete
                </button>

                {Modal("Delete",title,id)};
                
            </div>
        );
    }


    const renderList= ()=>{
        return props.admin.map( (admin) =>{
            return (
                <div className="item" key={admin._id}>
                    {renderAdmin(admin,admin.title,admin._id)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <Link to={`/admin/${admin._id}`} className="header">
                            {admin.title}
                        </Link>
                        <div className="description">{admin.description}</div>
                    </div>
                </div>
            )
        })
    }

    const renderCreate= ()=> {
        return (
            <div style={{ textAlign: 'right' }}>
                <Link to="/admin/create" className="ui button primary">
                    CreateAdmin
                </Link>
            </div>
        );
    }

    return (
        <div>
            <h2>Admin</h2>
            <div className="ui celled list">{renderList()}</div>
            { renderCreate() }
        </div>
    );
}

const mapStateToProps= (state)=>{
    console.log(state);
    return { 
        admin: Object.values(state.admin),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps,{fetchAdmins, deleteAdmin})(AdminList);