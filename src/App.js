import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import PassengerDashboard from './pages/PassengerDashboard';
import EmployeeDashboard from './pages/EmployeeDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/PassengerDashboard' element={<PassengerDashboard/>}></Route>
        <Route path='/EmployeeDashboard' element={<EmployeeDashboard/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
