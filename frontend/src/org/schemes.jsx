import { useState } from "react";

function Schemes() {
  const [schemeName, setSchemeName] = useState("");
  const [amount, setAmount] = useState("");
  const [user, setUser] = useState("");
  const display = (e) => {
    e.preventDefault();
    console.log({ schemeName, amount, user });
  };

  return (
    <div>
      <div> <h1 className="text-center font-extrabold h-30 bg-amber-200 flex items-center justify-center">Schemes page</h1> </div>
       
    <div className="flex items-center justify-center h-90">
      <form onSubmit={display}>
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
        <button type="submit" className="h-30 w-5/6"> Submit </button>
      </form>
    </div> </div>
  );
}

export default Schemes;
