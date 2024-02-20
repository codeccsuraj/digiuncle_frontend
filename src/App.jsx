import React from 'react';
import { Index as Route } from './routes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <>
      <ToastContainer hideProgressBar theme='dark' autoClose={3000} />
      <Route />
    </>
  );
}

export default App;
