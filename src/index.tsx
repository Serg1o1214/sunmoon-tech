import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import MobileNav from './components/MobileNav';
import './index.css';

const App = () => (
  <BrowserRouter>
    <MobileNav />
    {/* 你可以在这里添加其他页面内容 */}
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />); 