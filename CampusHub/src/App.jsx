import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Resources from "./pages/Resources";
import Profile from "./pages/Profile";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/tasks" element={<Tasks/>}/>
      <Route path="/resources" element={<Resources/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
  );
}

export default App;