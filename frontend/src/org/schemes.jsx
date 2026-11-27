import { useState } from "react";

function Schemess() {
  const [schemeName, setSchemeName] = useState("");
  const [amount, setAmount] = useState("");
  const [user, setUser] = useState("");
  const display = (e) => {
    e.preventDefault();
    console.log({ schemeName, amount, user });
  };

  return (
    <div>
      <div> <h1 className="bg-blue-950 text-white font-extrabold  flex justify-center items-center h-23 text-2xl">SCHEMES REGISTERATION</h1> </div>
       
      <div className="rounded-2xl bg-white border-2 border-black shadow-lg  shadow-black w-70 h-84  flex items-center justify-center  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <form onSubmit={display} className="flex flex-col gap-0.5">
        <h4>Scheme Name:</h4>
        <input type="text" placeholder="Enter scheme name" value={schemeName} onChange={(e) => setSchemeName(e.target.value)} />
        <br/>
        <h4>Amount:</h4>
        <input type="number" placeholder="Enter amount" value={amount} onChange={(e) => setAmount(e.target.value)}/>
        <br/>
        <h4>User Type:</h4>
        <select value={user} onChange={(e) => setUser(e.target.value)}>
          <option value="">Select user type</option>
          <option value="student">Student</option>
          <option value="farmer">Farmer</option>
          <option value="senior_citizen">Senior Citizen</option>
          <option value="other">Other</option>
        </select>
        <br/>
        <button type="submit" className="rounded-3xl w-34  bg-green-500" > Submit </button>
      </form>
    </div> </div>
  );
}

export default Schemess;
