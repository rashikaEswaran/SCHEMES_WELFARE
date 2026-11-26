import { useState } from "react";
import Login from "./org/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./org/user";
import Schemess from "./org/schemes";



function App() {
  
  return ( 
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/schemes" element={<Schemess/>}/>
        <Route path="/user" element={<User/>}/>
       </Routes>
       </BrowserRouter>
      
    
      
     );
}

export default App;
