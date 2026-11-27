import { Link } from "react-router-dom";

function Userdashboard() {
    return ( 
        <div>
            <div className="h-23 text-3xl bg-blue-950 font-extrabold text-white flex items-center justify-center">Dashboard</div>

            <div className="bg-blue-950 h-screen w-38">
                  <Link to={"/userregister"} className="rounded-4xl border-3 border-amber-50 text-white ">User Register</Link>
            </div>
        </div>
     );
}

export default Userdashboard;