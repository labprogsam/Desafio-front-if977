import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Kanban} from './views';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Kanban />}/>
      </Routes>
    </Router>
  );
};

export default AppRoutes;