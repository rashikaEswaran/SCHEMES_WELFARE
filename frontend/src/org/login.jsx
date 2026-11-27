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
     navigate("/orgdashboard",
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
      <div className="h-screen w-screen bg-slate-100 " >

      
      <div> <h1 className="bg-blue-950 text-white font-extrabold  flex justify-center items-center h-23 text-2xl">SCHEME WELFARE</h1> </div>
       
      <div className="rounded-2xl bg-white border-2 border-black shadow-lg  shadow-black w-60 h-67 flex items-center justify-center  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col gap-4">
        <form onSubmit={display} className="flex flex-col gap-0.5">
         <h4>Enter Email:</h4>
         <input type="Email" placeholder="mail" name="email" onChange={setdatas}/>
         <br/>
         <h4 >Enter Password:</h4>
         <input type="password" placeholder="password" name="password" onChange={setdatas}/>
         <br/>
         <button type="submit" className="rounded-4xl bg-green-500  w-46">SUBMIT</button>
         </form> 
      </div>

      </div>
      
     );
}

export default Login;
