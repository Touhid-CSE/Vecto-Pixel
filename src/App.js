import React from 'react';
import MyRoute from './components/MyRoute';
import { BrowserRouter } from 'react-router-dom'; //npm install react-router-dom
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './hoc/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <ErrorBoundary>
          <MyRoute />
        </ErrorBoundary>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
