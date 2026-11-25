import { useState } from "react";
import Login from "./org/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Schemes from "./org/schemes";
import User from "./org/user";



function App() {
  
  return ( 
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/schemes" element={<Schemes/>}/>
        <Route path="/user" element={<User/>}/>
       </Routes>
       </BrowserRouter>
      
    
      
     );
}

export default App;
