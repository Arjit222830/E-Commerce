import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAdmin, deleteAdmin } from '../../actions';

const AdminDelete = (props)=> {

    useEffect(() => {
        console.log(props);
        props.fetchAdmin(props.match.params.id);
    },[]);
  

    const renderActions= (id)=>{
        
        return (
            <React.Fragment>
                <button onClick={()=> props.deleteAdmin(id)} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="ui button negative" data-toggle="modal" data-target={`#exampleModal${id}`}>
                    Delete
                </button>
            </React.Fragment>
        );
    }

    const renderContent= ()=> {
        if(!props.admin_info)
            return 'Are you sure you want to delete this stream?';
        
        return `Are you want to delete the stream with title: ${props.admin.title}`;
    }

    const Modal= (title)=>{
        console.log("modal");
        const id= props.match.params.id
        return (
            <>
                <div class="modal fade" id={`exampleModal${id}`} tabindex="-1" aria-labelledby={`exampleModalLabel${id}`} aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id={`exampleModalLabel${id}`}>{title}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            {renderContent()}
                        </div>
                        <div class="modal-footer">
                            {renderActions(id)}
                        </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    if(!props.admin_info)
        return "Loading";

    return (
        <div>
            {Modal("Delete Admin")}
        </div>
    );
}

const mapStateToProps= (state, ownProps)=> {
    console.log(state);
      return {admin_info: state.admin[ownProps.match.params.id]}  
}

export default connect(mapStateToProps, { fetchAdmin, deleteAdmin })(AdminDelete);