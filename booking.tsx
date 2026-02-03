import React from 'react';
import ReactDOM from 'react-dom/client';
import { Layout } from './components/Layout';
import { Registration } from './pages/Registration';
import './index.css';

const BookingPage: React.FC = () => {
  return (
    <Layout activePage="booking">
      <Registration />
    </Layout>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <BookingPage />
    </React.StrictMode>
  );
}