import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';

import { store } from './redux/store';
import './index.css';

ReactDOM.render(
    <BrowserRouter basename='/react-redux-spec-course'>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
