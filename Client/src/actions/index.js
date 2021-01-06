import admin from '../apis/axios';

import history from '../history';

export const ADD_BRAND_TO_FILTER = 'ADD_BRAND_TO_FILTER';
export const REMOVE_BRAND_FROM_FILTER = 'REMOVE_BRAND_FROM_FILTER';
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export const INCREMENT_CART_ITEM_QUANTITY = 'INCREMENT_CART_ITEM_QUANTITY';
export const DECREMENT_CART_ITEM_QUANTITY = 'DECREMENT_CART_ITEM_QUANTITY';
export const SIGN_IN= 'SIGN_IN';
export const SIGN_OUT= 'SIGN_OUT';
export const CREATE_ADMIN= 'CREATE_ADMIN'
export const FETCH_ADMINS= 'FETCH_ADMINS'
export const FETCH_ADMIN= 'FETCH_ADMIN'
export const EDIT_ADMIN= 'EDIT_ADMIN'
export const DELETE_ADMIN= 'DELETE_ADMIN'
export const FETCH_PRODUCTS= 'FETCH_PRODUCTS'
export const PREV_PAGE = 'PREV_PAGE';
export const NEXT_PAGE = 'NEXT_PAGE';
export const GO_PAGE = 'GO_PAGE';
export const COUNT_ITEM = 'COUNT_ITEM';
export const ORDER_BY_ASC = 'ORDER_BY_ASC';
export const ORDER_BY_DESC = 'ORDER_BY_DESC';
export const CLEAR_ORDER_BY_PRICE = 'CLEAR_ORDER_BY_PRICE';

export const signIn = (user)=>{
    return {
        type: SIGN_IN,
        payload: user
    }
};

export const signOut = ()=>{
    return {
        type: SIGN_OUT
    }
};

export const addProductToCart = product => {
    return {
        type: ADD_PRODUCT_TO_CART,
        payload: product
    }
};

export const removeProductToCart = productId => {
    return {
        type: REMOVE_PRODUCT_FROM_CART,
        payload: productId
    }
};

export const incrementCartQuantity = productId => {
    return{
        type: INCREMENT_CART_ITEM_QUANTITY,
        payload: productId
    }
};

export const decrementCartQuantity = productId => {
  return {
      type: DECREMENT_CART_ITEM_QUANTITY,
      payload: productId
  }
};

export const clearOrderBy = () => {
    return {
        type: CLEAR_ORDER_BY_PRICE
    }
};

export const nextPage = () => {
    return {
        type: NEXT_PAGE
    }
};

export const prevPage = () => {
    return {
        type: PREV_PAGE
    }
};

export const goPage = (n) => {
    return {
        type: GO_PAGE,
        currentPage: n
    }
};

export const countItem = (n) => {
    return {
        type: COUNT_ITEM,
        totalItemsCount: n
    }
}

export const orderByAsc = () => (dispatch)=>{
    dispatch({type: ORDER_BY_ASC});
};

export const orderByDesc = () => (dispatch)=>{
    dispatch({type: ORDER_BY_DESC});
};

export const addBrandToFilter = (brand) => (dispatch)=>{
    console.log("g");
    dispatch({type: ADD_BRAND_TO_FILTER, brand});
};

export const removeBrandFromFilter = (brand) => (dispatch)=>{
    dispatch({type: REMOVE_BRAND_FROM_FILTER, brand});
};

export const fetchProducts= () => async (dispatch) => {
    const response= await admin.get('/admin');
    dispatch({type: FETCH_PRODUCTS, payload: response.data});
};

//Admin

export const createAdmin= (formValues)=> async (dispatch, getState)=>{
    console.log(formValues);
    const response = await admin.post('/admin', {...formValues} );
    dispatch({type: CREATE_ADMIN, payload: response.data});
    alert("Added");
};

export const fetchAdmins= () => async (dispatch) => {
    const response= await admin.get('/admin');
    dispatch({type: FETCH_ADMINS, payload: response.data});
};

export const fetchAdmin= (id) => async (dispatch) => {
    const response = await admin.get(`/admin/${id}`);
    dispatch({ type: FETCH_ADMIN, payload:response.data});
};

export const editAdmin= (id, formValues)=> async (dispatch)=> {
    const response=  await admin.put(`/admin/${id}`, formValues);
    dispatch({ type: FETCH_ADMIN, payload: response})
};

export const deleteAdmin= (id)=> async (dispatch)=> {
    await admin.delete(`/admin/${id}`);
    dispatch({type: DELETE_ADMIN, payload: id});
    window.location.replace('/admin/show');
};
