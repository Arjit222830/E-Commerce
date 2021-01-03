import {combineReducers} from 'redux';
import shop from './shop.reducer';
import {brandFilterReducer} from "./brand.filter.reducer";
import {orderByPriceReducer} from "./orderByPrice.filter.reducer";
import {paginationReducer} from "./pagination.reducer";
import { reducer as formReducer} from 'redux-form';
import authReducer from './authReducer';
import adminReducer from './adminReducer';

export default combineReducers({
    shop,
    auth: authReducer,
    admin: adminReducer,
    form: formReducer,
    brandFilter: brandFilterReducer,
    orderBy: orderByPriceReducer,
    pagination: paginationReducer
});
