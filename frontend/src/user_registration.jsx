/*import { useState } from "react";

function User() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [panId, setPanId] = useState("");
  const [aadhaarId, setAadhaarId] = useState("");
  const display = (e) => {
    e.preventDefault();
    console.log({ name, age, panId, aadhaarId });
  };

  return (
    <div className="flex items-center justify-center">
      
      <form onSubmit={display} > <h4>Name:</h4>
        <input type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
        <br/>
        <h4>Age:</h4>
        <input type="number" placeholder="Enter age" value={age} onChange={(e) => setAge(e.target.value)} />
        <br />
        <h4>PAN ID:</h4>
        <input type="text" placeholder="Enter PAN ID" value={panId} onChange={(e) => setPanId(e.target.value)} />
        <br />
        <h4>Aadhaar ID:</h4>
        <input type="text" placeholder="Enter Aadhaar ID" value={aadhaarId}onChange={(e) => setAadhaarId(e.target.value)} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default User;*/

import { registerschema } from "./components/formSchema/registerschema";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

function Register()
{
  const {register,handleSubmit,formState:{errors}}=useForm({resolver:zodResolver(registerschema)})

  function submit(data)

  {
    toast.success("SUCCESS!");
    console.log(data);

  }
  return(
    <div>
      <div> <h1 className="bg-blue-950 text-white font-extrabold  flex justify-center items-center h-23 text-2xl">USER REGISTERATION</h1> </div>
 
      <div className="rounded-2xl bg-white border-2 border-black shadow-lg  shadow-black w-70 h-94 flex items-center justify-center  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-2">
       <input type="text" placeholder="Enter your name:" {...register("name")}/>
       <p>{errors.name?.message}</p>
       <input type="number" placeholder="Enter your age:" {...register("age")}/>
       <p>{errors.age?.message}</p>
       <input type="email" placeholder="Enter your email:" {...register("email")}/>
       <p>{errors.email?.message}</p>
       <input type="password" placeholder="Enter your password:" {...register("password")}/>
       <p>{errors.password?.message}</p>
       <input type="text" placeholder="Enter your panid:" {...register("panid")}/>
       <p>{errors.panid?.message}</p>
       <input type="number" placeholder="Enter your Aadharid:" {...register("aadharid")}/>
       <p>{errors.aadharid?.message}</p>
       <button type="submit " className="bg-green-600 rounded-4xl">SUBMIT</button>
       </form>
       </div>
    </div>
    
  );
}
export default Register;

