import React from "react";
import NavBar from "./NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from "./employees/Employees";
import EmployeeDetails from "./employees/EmployeeDetails";
import AddEmployee from "./employees/AddEmployee";
import EditEmployee from "./employees/EditEmployee";

import SignIn from "./Login2";
import SignUp from "./SignUp2";
import AuthDetails from "./AuthoDetails";
import HomePage from "./HomePage";
import Leaves from "./leaves/Leaves";
import LeaveDetails from "./leaves/LeaveDetails";
import EditLeave from "./leaves/EditLeave";
import AddLeave from "./leaves/AddLeave";
import Performances from "./performances/Performances";
import PerformanceDetails from "./performances/PerformancesDetails";
import EditPerformance from "./performances/EditPerformance";
import AddPerformance from "./performances/AddPerformance";
import Notifications from "./notifications/Notifications";
import AddNotification from "./notifications/AddNotification";
import EditNotification from "./notifications/EditNotification";
import NotificationDetails from "./notifications/NotificationDetails";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect
} from "react-router-dom";

import { AuthContext } from "./context/AuthContext";
import Protected from "./Protected";

export default function App (){
  
    return (
        <AuthContext>
          <Router>
            <NavBar/>

            <Routes>
              <Route 
                  exact 
                  path="/"
                  element={<HomePage/>}></Route>
          
              <Route 
                exact
                path="/employees"
                element={<Protected><Employees/></Protected>}></Route>
              <Route
                exact 
                path="/leaves" 
                element={<Protected><Leaves/></Protected>}></Route>
              
              <Route
                exact 
                path="/employeeDetails/:id"
                element={<Protected><EmployeeDetails/></Protected>}></Route>
              
              <Route
                exact 
                path="/update_leave/:id"
                element={<Protected><EditLeave/></Protected>}></Route>
            
              <Route
                exact 
                path="/add_employee"
                element={<Protected><AddEmployee/></Protected>}></Route>
              <Route
                exact 
                path="/add_leave"
                element={<Protected><AddLeave/></Protected>}></Route>
              

              <Route
                exact 
                path="/leaves/:id"
                element={<Protected><LeaveDetails/></Protected>}></Route>
              <Route
                exact 
                path="/performances"
                element={<Protected><Performances/></Protected>}></Route>
              <Route
                exact 
                path="/performances/:id"
                element={<Protected><PerformanceDetails/></Protected>}></Route>

              <Route
                exact 
                path="/update_performance/:id"
                element={<Protected><EditPerformance/></Protected>}></Route>

              <Route
              exact 
              path="/add_performance"
              element={<Protected><AddPerformance/></Protected>}></Route>
              <Route
                exact 
                path="/notifications"
                element={<Protected><Notifications/></Protected>}></Route>
              
              <Route
                exact 
                path="/update_notification/:id"
                element={<Protected><EditNotification/></Protected>}></Route>

              <Route
              exact 
              path="/add_notification"
              element={<Protected><AddNotification/></Protected>}></Route>

              <Route
                exact 
                path="/notifications/:id"
                element={<Protected><NotificationDetails/></Protected>}></Route>

              <Route
                exact 
                path="/login"
                element={<SignIn/>}></Route>
              <Route
                exact 
                path="/sign_up"
                element={<SignUp/>}></Route>
              <Route
                exact 
                path="/log_out"
                element={<AuthDetails/>}></Route>
            </Routes>
          </Router>
        </AuthContext>
    )
};