import React from "react"; 
import Frame from "./Frame";

import { Link } from "react-router-dom";
function Login() {
  return (

    <div className="logLogin" >
      
      <div className="login">    
          <form id="login" name="suForm">    
            <label className="la" ><b>Email Id:</b>
            </label><br />
            <input type="email" name="uname" className="uname" />    
            <br /><br />    
            <label className="la"><b>Password:</b>    
            </label>    
            <input type="Password" name="Pass" id="Pass" onclick="resetBut()" />    
            <br /><br /> <br /> <br />
            <input type="checkbox" id="check" />    
            <span>Remember me</span>    
            <br /><br />    
           <button className="but"><Link to="/">Login</Link></button>
            <br /><br /> <br /><br />
            <div className="urll">
              <Link to="/register">Create an Account</Link>
            </div>
            <a className="fpass">Forgot Password?</a>    
          </form>
      </div></div>
  );
}
export default Login;