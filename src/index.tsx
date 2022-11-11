import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '@application/components/App/App';
import reportWebVitals from './reportWebVitals';
import { store } from '@src/store';
import { Provider } from 'react-redux';

if (process.env.NODE_ENV === 'development') {
  const { worker } = await import('./mocks/browser');
  await worker.start();
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
