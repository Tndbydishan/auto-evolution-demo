import React from 'react';
import ReactDOM from 'react-dom/client';
import { Layout } from './components/Layout';
import { Services } from './pages/Services';
import './index.css';

const ServicesPage: React.FC = () => {
  return (
    <Layout activePage="services">
      <Services />
    </Layout>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ServicesPage />
    </React.StrictMode>
  );
}