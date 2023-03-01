import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ROUTES from './routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {ROUTES.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
