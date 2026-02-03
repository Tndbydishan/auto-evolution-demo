import React from 'react';
import ReactDOM from 'react-dom/client';
import { Layout } from './components/Layout';
import { About } from './pages/About';
import './index.css';

const AboutPage: React.FC = () => {
  return (
    <Layout activePage="about">
      <About />
    </Layout>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <AboutPage />
    </React.StrictMode>
  );
}