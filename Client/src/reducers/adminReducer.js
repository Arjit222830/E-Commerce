import _ from 'lodash';
import { FETCH_ADMINS, CREATE_ADMIN, FETCH_ADMIN, EDIT_ADMIN, DELETE_ADMIN } from '../actions';

export default (state={}, action)=>{
    switch (action.type) {
        case FETCH_ADMINS:
            return {...state, ..._.mapKeys(action.payload,'_id')};
        case FETCH_ADMIN:
            return { ...state, [action.payload._id]: action.payload };
        case CREATE_ADMIN:
            return { ...state, [action.payload._id]: action.payload };
        case EDIT_ADMIN:
            return { ...state, [action.payload._id]: action.payload };
        case DELETE_ADMIN:
            return _.omit(state, action.payload);
        default:
            return state;
    }
} 