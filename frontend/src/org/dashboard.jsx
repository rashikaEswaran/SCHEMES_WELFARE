import { useState } from "react";
import { useLocation } from "react-router-dom";

function Dashboard()
{
    const location=useLocation();
    const[userdata,setUserdata]=useState("");
    function display()
    {
        setUserdata(location.state);
        console.log(userdata)
    }
    return(
        <button type="submit" onClick={display}>SUBMIT</button>
    );
}

export default Dashboard;