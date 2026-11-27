import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

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
        <div>
            <div className="h-23 text-3xl bg-blue-950 font-extrabold text-white flex items-center justify-center">Org Dashboard</div>
            <nav className="bg-amber-100 h-10 flex items-center justify-center flex-row gap-10">
                <Link to={"/userregister"} className="rounded-4xl bg-amber-300 text-black w-45  text-center" >User Register</Link>
                <Link to={"/schemeregister" }className="rounded-4xl bg-amber-300 text-black w-45 text-center ">Scheme Register</Link>
            </nav>
            
        </div>
        
    );
}

export default Dashboard;