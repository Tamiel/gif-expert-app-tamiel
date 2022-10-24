import React from 'react';
import ReactDOM from 'react-dom/client';

//pages
import GifExpertApp from './pages/GifExpertApp';

//utilities
import './styles.css';
//token_api = NPMd5G3ixfnxMxybGNHFY8Qx2DKNWokK
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
);