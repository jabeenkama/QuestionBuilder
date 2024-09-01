import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import AdministratorDashboard from './components/AdministratorDashboard';
import TrainerDashboard from './components/TrainerDashboard';
import EmployeeDashboard from './components/EmployeeDashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/administrator" replace />} />
          <Route path="/" element={<Navigate to="/trainer" replace />} />
          <Route path="/" element={<Navigate to="/employee" replace />} />
          <Route path="/administrator" element={<AdministratorDashboard />} />
          <Route path="/trainer" element={<TrainerDashboard />} />
          <Route path="/employee" element={<EmployeeDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;