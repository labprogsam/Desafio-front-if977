import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Kanban, Task} from './views';

const AppRoutes = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Kanban />}/>
        <Route path="/task" element={<Task />}/>
        <Route path="/task/:id" element={<Task />}/>
      </Routes>
    </Router>
  );
};

export default AppRoutes;