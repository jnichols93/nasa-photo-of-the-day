import React from "react";
import Logo from "../Images/logo.png";

const Header = props => {
    
    return (
      
       <div className="logo">
        <img className ="logo" src = {Logo}></img>

        <h1>P.O.D</h1>    

       </div>
       

      
    );
  };

 export default Header
