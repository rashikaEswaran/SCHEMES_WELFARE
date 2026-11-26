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

import { registerschema } from "../components/formSchema/registerschema";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

function Register()
{
  const {register,handleSubmit,formState:{errors}}=useForm({resolver:zodResolver(registerschema)})

  function onsubmit1(data)

  {
    toast.success("SUCCESS");
    console.log(data);

  }
  return(

    <form onSubmit={handleSubmit(onsubmit1)}>
       <input type="text" placeholder="enter your name:" {...register("name")}/>
       <p>{errors.name?.message}</p>
       <input type="number" placeholder="enter your age:" {...register("age")}/>
       <p>{errors.age?.message}</p>
       <input type="email" placeholder="enter your email:" {...register("email")}/>
       <p>{errors.email?.message}</p>
       <input type="password" placeholder="enter your password:" {...register("password")}/>
       <p>{errors.password?.message}</p>
       <input type="text" placeholder="enter your panid:" {...register("panid")}/>
       <p>{errors.panid?.message}</p>
       <input type="number" placeholder="enter your Aadharid:" {...register("aadharid")}/>
       <p>{errors.aadharid?.message}</p>
       <button type="submit">SUBMIT</button>
       


    </form>
  );
}
export default Register;

