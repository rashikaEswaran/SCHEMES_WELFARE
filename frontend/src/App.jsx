import { useState } from "react";
import Login from "./org/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Schemess from "./org/schemes";
import Dashboard from "./org/dashboard";
import {Toaster} from "react-hot-toast";
import Register from "./user_registration";
import Userdashboard from "./user/dashboard";


function App() {
  
  return ( 
       <BrowserRouter>
       <Toaster position="top-center"/>
       <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/userregister" element={<Register/>}/>
        <Route path="/schemeregister" element={<Schemess/>}/>
        <Route path="/orgdashboard" element={<Dashboard/>}/>
        <Route path="/userdashboard" element={<Userdashboard/>}/>
       </Routes>
       </BrowserRouter>
      
    
      
     );
}

export default App;
