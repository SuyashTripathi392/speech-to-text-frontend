import React from 'react';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
      <Home />
      <ToastContainer position="top-center" />
    </>
  );
};

export default App;
