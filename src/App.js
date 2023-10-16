import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import PassengerDashboard from './pages/PassengerDashboard';
import EmployeeDashboard from './pages/EmployeeDashboard';
import DisplayCrowded from './components/DisplayCrowded';
import AssignBus from './components/AssignBus';
import DisplayWholeTimeTable from './components/DisplayWholeTimeTable';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/PassengerDashboard' element={<PassengerDashboard/>}></Route>
        <Route path='/EmployeeDashboard' element={<EmployeeDashboard/>}></Route>
        <Route path='/DisplayCrowded' element={<DisplayCrowded/>}></Route>
        <Route path='/AssignBus' element={<AssignBus/>}></Route>
        <Route path='/DisplayWholeTimeTable' element={<DisplayWholeTimeTable/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
