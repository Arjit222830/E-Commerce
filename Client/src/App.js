import React, { Component } from 'react';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers';

import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import './App.scss';
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ShoppingCart from "./pages/ShopingCart/ShoppingCart";
import AdminShow from "./components/admin/AdminShow";
import AdminCreate from "./components/admin/AdminCreate";
import AdminDelete from "./components/admin/AdminDelete";
import AdminEdit from "./components/admin/AdminEdit";
import AdminInfo from "./components/admin/AdminInfo";
import Modal from "./components/admin/Modal";

const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;
export const  store = createStore(rootReducer,composeEnhancers(applyMiddleware(reduxThunk)));

const App =()=> {
  return (
      <Provider store={store}>
          <BrowserRouter>
          <React.Fragment>
              <Header/>
              <Switch>
                  <Route exact path={'/'} component={Home}/>
                  <Route exact path={'/products/:id'} component={ProductDetail}/>
                  <Route exact path={'/cart'} component={ShoppingCart}/>
                  <Route exact path={'/admin/show'} component={AdminShow}/>
                  <Route exact path={'/admin/create'} component={AdminCreate}/>
                  <Route exact path={'/admin/edit/:id'} component={AdminEdit}/>
                  <Route exact path={'/admin/delete/:id'} component={AdminDelete}/>
                  <Route exact path={'/admin/:id'} component={AdminInfo}/>
                  <Route exact path={'/admin/modal/:id'} component={Modal}/>
              </Switch>
              
          </React.Fragment>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
