
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { fbConfig } from './components/fbconfig'; 
import { initializeApp} from 'firebase/app'
import App from './components/App';

const app = initializeApp(fbConfig)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

