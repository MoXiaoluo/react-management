import React from 'react';
import ReactDOM from 'react-dom/client';
// init browser style and import tailwind css
import './index.css';
import 'antd/dist/reset.css';
// global style
import '@/assets/styles/global.scss';
// local component
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
