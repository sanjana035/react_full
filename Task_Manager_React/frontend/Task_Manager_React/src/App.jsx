import React from "react";
import {
  BrowerRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SignUp from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Admin/Dashboard";
import ManageTasks from "./pages/Admin/ManageTasks";
import CreateTask from "./pages/Admin/CreateTask";
import ManageUsers from "./pages/Admin/ManageUsers";
import UserDashboard from "./pages/User/UserDashboard";
import MyTasks from "./pages/User/MyTasks";

const App = () =>{
  return(
    <div>
      <Router>
        <Routes>
          <Route path = "/login" element = {<Login />}></Route>
          <Route path = "/signUp" element = {< SignUp/>}></Route>
          {/*Admin Routes */}
          <Route element = {<PrivateRoute allowedRoles={["admin"]}/>}>
            <Route path = "/admin/dashboard" element={<Dashboard/>}></Route>
            <Route path = "/admin/tasks" element={<ManageTasks/>}></Route>
            <Route path = "/admin/create-task" element={<CreateTask/>}></Route>
            <Route path = "/admin/users" element={<ManageUsers/>}></Route>
          </Route>

          {/*User Routes */}
          <Route element = {<PrivateRoute allowedRoles={["user"]}/>}>
            <Route path = "/user/userdashboard" element={<UserDashboard/>}></Route>
            <Route path = "/user/mytasks" element={<MyTasks/>}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}
export default App