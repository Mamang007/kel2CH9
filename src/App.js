import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import DescriptionPage from './views/DescriptionPage';
import HomePage from './views/HomePage';

function App() {
  return (
    <div>
      <DescriptionPage />
    </div>
  );
};

export default App;