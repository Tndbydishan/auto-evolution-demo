import React from 'react';
import ReactDOM from 'react-dom/client';
import { Layout } from './components/Layout';
import { Blogs } from './pages/Blogs';
import './index.css';

const BlogsPage: React.FC = () => {
  return (
    <Layout activePage="blogs">
      <Blogs />
    </Layout>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <BlogsPage />
    </React.StrictMode>
  );
}