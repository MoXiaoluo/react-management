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

//状态管理
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
