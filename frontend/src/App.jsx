import { useState } from "react";
import Login from "./org/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./org/user_registration";
import Schemess from "./org/schemes";
import Dashboard from "./org/dashboard";
import {Toaster} from "react-hot-toast";


function App() {
  
  return ( 
       <BrowserRouter>
       <Toaster position="top-center"/>
       <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/schemes" element={<Schemess/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
       
       </Routes>
       </BrowserRouter>
      
    
      
     );
}

export default App;
