import React, { Component, } from 'react';
import Routes from './Routes';
import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

const store = createStore(reducers, {},applyMiddleware(ReduxThunk) );

export default props => {
	console.disableYellowBox = true;
    return(
      <Provider store={store} >
        <Routes />
      </Provider>
    );
}   