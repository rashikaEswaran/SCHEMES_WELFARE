import { useState } from "react";

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

export default User;
