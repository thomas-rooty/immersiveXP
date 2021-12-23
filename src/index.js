import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Ignore react 18 warnings
console.error = function filterErrors(message) {
  if (message.indexOf('Warning: ReactDOM.render is no') === -1) {
    console.error(message);
  }
}

const container = document.getElementById('root');

// Create a root
const root = ReactDOM.createRoot(container);

// Render the component in the root
root.render(<App />);