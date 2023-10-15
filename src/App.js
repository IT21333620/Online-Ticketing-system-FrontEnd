import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import PassengerDashboard from './pages/PassengerDashboard';
import EmployeeDashboard from './pages/EmployeeDashboard';
import EmployeeLocalPay from './pages/EmployeeLocalPay';
import PassengerOnlinePayment from './pages/PassengerOnlinePayment';
import PassengerLogin from './pages/PassengerLogin';
import { UserProvider } from './UserContext';

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
