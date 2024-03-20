import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { AuthApp } from "./auth/index"
import Menu from './Menu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <App /> */}
    {/* <AuthApp /> */}
    <Menu />
  </>
);