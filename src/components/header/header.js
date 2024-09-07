import React from "react";
import "./header.css";
const Header = () =>{

    return(
        <div className="nav">
            <div className="nav-logo">
                <img src="../assets/images/logo.png" alt="logo"/>
            </div>

            <ul>
                <li>Home</li>
                <li>Community</li>
                <li>About</li>
                <li>Blog</li>
            </ul>

            <div  className="sign-up">
                <button>Sign up</button>
            </div>
        </div>
    )
}

export default Header;