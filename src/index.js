import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "./redux-store/reducer";

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <div className='main-container'>
            <App />
        </div>
    </Provider>
  </React.StrictMode>
);
