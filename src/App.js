import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import PassengerDashboard from './pages/PassengerDashboard';
import EmployeeDashboard from './pages/EmployeeDashboard';
import EmployeeLocalPay from './pages/EmployeeLocalPay';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/PassengerDashboard' element={<PassengerDashboard/>}></Route>
        <Route path='/EmployeeDashboard' element={<EmployeeDashboard/>}></Route>
        <Route path='/EmployeeLocalPay' element={<EmployeeLocalPay/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
