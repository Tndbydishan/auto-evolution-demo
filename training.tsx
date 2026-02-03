import React from 'react';
import ReactDOM from 'react-dom/client';
import { Layout } from './components/Layout';
import { Training } from './pages/Training';
import './index.css';

const TrainingPage: React.FC = () => {
  return (
    <Layout activePage="training">
      <Training />
    </Layout>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <TrainingPage />
    </React.StrictMode>
  );
}