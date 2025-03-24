import { Link, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import AddPup from "./AddPup";

function NavBar() {
    return ( 
        <div>
            <div className="NavBar">
                <div className="LinkWrapper">
                    <Link to={"/"}>Home</Link>
                </div>
                <div className="LinkWrapper">
                    <Link to={"/AddPup"}>Submit Pup</Link>
                </div>
            </div>
            
        </div>
     );
}

export default NavBar;