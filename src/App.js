import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { UserProvider } from './UserContext';
import EmployeeDashboard from './pages/EmployeeDashboard';
import EmployeeLocalPay from './pages/EmployeeLocalPay';
import PassengerDashboard from './pages/PassengerDashboard';
import PassengerLogin from './pages/PassengerLogin';
import PassengerOnlinePayment from './pages/PassengerOnlinePayment';
import AssignInspectorDashboard from './pages/AssignInspectorDashboard';
import AssignInspector from './pages/AssignInspector';
import InspectorDetails from './pages/InspectorDetails';
import EditInspectDetails from './pages/EditInspectDetails';
import DisplayCrowded from './components/DisplayCrowded';
import AssignBus from './components/AssignBus';
import DisplayWholeTimeTable from './components/DisplayWholeTimeTable';


function App() {
  return (
    <Router>
      <UserProvider>
      <Routes>
        <Route path='/passengerDashboard' element={<PassengerDashboard/>}></Route>
        <Route path='/EmployeeDashboard' element={<EmployeeDashboard/>}></Route>
        <Route path='/EmployeeLocalPay' element={<EmployeeLocalPay/>}></Route>
        <Route path='/AssignInspectorDashBoard' element={<AssignInspectorDashboard/>}></Route>
        <Route path='/AssignInspector' element={<AssignInspector/>}></Route>
        <Route path='/InspectorDetails/:id' element={<InspectorDetails/>}></Route>
        <Route path='/EditInspectDetails/:id'element={<EditInspectDetails/>}></Route>
        <Route path='/PassengerOnlinePayment' element={<PassengerOnlinePayment/>}></Route>
        <Route path='/PassengerLogin' element={<PassengerLogin/>}></Route>
        <Route path='/DisplayCrowded' element={<DisplayCrowded/>}></Route>
        <Route path='/AssignBus' element={<AssignBus/>}></Route>
        <Route path='/DisplayWholeTimeTable' element={<DisplayWholeTimeTable/>}></Route>
      </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
