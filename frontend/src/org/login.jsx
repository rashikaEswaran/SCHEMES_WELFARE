import { useState } from "react";

function Login() {
 

  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
    
  const display=(e)=>
  {
     e.preventDefault() 
     console.log(email,password);
  }
  return ( 
      <div>

      
      <div> <h1 className="text-center font-extrabold h-30 bg-amber-200 flex items-center justify-center">Login page</h1> </div>
       
      <div className="flex items-center justify-center h-40">
        <form onSubmit={display}>
         <h4>Enter Password:</h4>
         <input type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
         <br/>
         <h4>Enter Email:</h4>
         <input type="Email" placeholder="mail" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
         <br/>
         <button type="submit" className="w-4/5">Submit</button>
      </form> 
      </div>

      </div>
      
     );
}

export default Login;
