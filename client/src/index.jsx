import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CardProvider } from './context/CardContext';
//ReactDOM.render(<App />, document.getElementById('root'));7
ReactDOM.render(
  <CardProvider>
    <App />
  </CardProvider>,
  document.getElementById('root')
);