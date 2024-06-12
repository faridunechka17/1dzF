import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from "redux";
import reduser from "./store/reduser";
import {Provider} from "react-redux";

const store = createStore(reduser)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>

    <App />
    </Provider>
);


