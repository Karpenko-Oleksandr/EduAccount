import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';

import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Students from './pages/Students';
import Payments from './pages/Payments';
import FinancialOperations from './pages/FinancialOperations';

function App() {

  return (

    <BrowserRouter>

      <Sidebar />

      <div className="main-content">

        <Routes>

          <Route path="/" element={<Dashboard />} />

          <Route path="/employees" element={<Employees />} />

          <Route path="/students" element={<Students />} />

          <Route path="/payments" element={<Payments />} />

          <Route path="/operations" element={<FinancialOperations />} />

        </Routes>

      </div>

    </BrowserRouter>

  );
}

export default App;