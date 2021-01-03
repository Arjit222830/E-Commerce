import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAdmin,fetchAdmins, deleteAdmin } from '../../actions';

const Modal = (props)=> {

    useEffect(() => {
        console.log(props);
        props.fetchAdmins();
        props.fetchAdmin(props.match.params.id);
    },[]);
  
    const renderActions= (id)=>{
        return (
            <React.Fragment>
                <button onClick={()=> props.deleteAdmin(id)} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <Link to="/" className="ui button negative">Delete</Link>
            </React.Fragment>
        );
    }

    const renderContent= ()=> {
        if(!props.admin_info)
            return 'Are you sure you want to delete this stream?';
        
        return `Are you want to delete the stream with title: ${props.admin.title}`;
    }

    const Mod= ()=>{
        console.log("modal");
        const id= props.match.params.id
        return (
            <>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">nnkn</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {renderContent()}
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



    return (
        <>
        <h2>hello</h2>
            <button type="button" className="ui button negative"  data-toggle="modal" data-target="#exampleModal">
                Delete
            </button>
           
            {Mod()}
        </>
    );
}

const mapStateToProps= (state, ownProps)=> {
    console.log(state);
      return {
        admin_info: state.admin[ownProps.match.params.id],
        admin: Object.values(state.admin),
    }  
}

export default connect(mapStateToProps, { fetchAdmin, deleteAdmin, fetchAdmins })(Modal);