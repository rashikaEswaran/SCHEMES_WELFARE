import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Login() {
 

  //const[email,setEmail]=useState("");
  //const[password,setPassword]=useState("");
  const[formdata,setFormdata]=useState(
   {
      email:"",
      password:""

   }
  )
  const navigate=useNavigate();  

  const display=(e)=>
  {
     e.preventDefault() 
     console.log(formdata.email,formdata.password);
     toast.success("Login successfully")
     navigate("/dashboard",
      {
         state:formdata
      }
     )
  }
  function setdatas(e)
  { 
    e.preventDefault();
    setFormdata({
      ...formdata,
      [e.target.name]:[e.target.value]
    })

  }
  return ( 
      <div>

      
      <div> <h1 className="text-center font-extrabold h-30 bg-amber-200 flex items-center justify-center">Login page</h1> </div>
       
      <div className="flex items-center justify-center h-40">
        <form onSubmit={display}>
         <h4>Enter Password:</h4>
         <input type="password" placeholder="password" name="password" onChange={setdatas}/>
         <br/>
         <h4>Enter Email:</h4>
         <input type="Email" placeholder="mail" name="email" onChange={setdatas}/>
         <br/>
         <button type="submit" className="w-4/5 ">Submit</button>
      </form> 
      </div>

      </div>
      
     );
}

export default Login;
