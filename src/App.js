import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { UserProvider } from './UserContext';
import EmployeeDashboard from './pages/EmployeeDashboard';
import EmployeeLocalPay from './pages/EmployeeLocalPay';
import PassengerDashboard from './pages/PassengerDashboard';
import PassengerLogin from './pages/PassengerLogin';
import PassengerOnlinePayment from './pages/PassengerOnlinePayment';

function App() {
  return (
    <Router>
      <UserProvider>
      <Routes>
        <Route path='/passengerDashboard' element={<PassengerDashboard/>}></Route>
        <Route path='/EmployeeDashboard' element={<EmployeeDashboard/>}></Route>
        <Route path='/EmployeeLocalPay' element={<EmployeeLocalPay/>}></Route>
        <Route path='/PassengerOnlinePayment' element={<PassengerOnlinePayment/>}></Route>
        <Route path='/PassengerLogin' element={<PassengerLogin/>}></Route>
      </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
