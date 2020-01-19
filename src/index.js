import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import { logger } from 'redux-logger';
import reducer from './reducers';
import './css/styles.css';
import App from './components/App';
import { render } from '@testing-library/react';


const store = createStore(
    reducer,
    applyMiddleware( thunk,logger )
)
    render(
        <Provider store = { store }>
            <App />
        </Provider>,
        document.getElementById('root')
)
