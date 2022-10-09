import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './application/components/App/App';
import reportWebVitals from './reportWebVitals';

if (process.env.NODE_ENV === 'development') {
  const { worker } = await import('./mocks/browser');
  await worker.start();
}

fetch('/api')
  .then(async (response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
