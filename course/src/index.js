import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

// import statements
import App from './app.js';
import "./style.css";

ReactDOM.render((
            <BrowserRouter>
                <App/>
            </BrowserRouter>
            ), document.getElementById("root"));