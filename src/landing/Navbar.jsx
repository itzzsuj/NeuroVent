import { useNavigate } from "react-router-dom";
function Navbar(){
    const navigate=useNavigate();
    return(
    <>
    <div className="navmain">
    <div className="navtitle">
        <h1>NEUROVENT</h1>
    </div>
    <div className="navcontent">
        <p>HOME</p>
        <p>ABOUT</p>
        <p>SUPPORT</p>
        <div className="navbutton">
        <button onClick={() => navigate("/login")}>LOGIN</button>
        </div>
    </div>
    </div>
    </>
    )
}
export default Navbar