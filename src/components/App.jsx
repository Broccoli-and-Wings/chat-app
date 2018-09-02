import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './MainRouter.jsx';

const App = () => (
  <BrowserRouter>
    <MainRouter />
  </BrowserRouter>
);

export default App;
