import React from "react";
import "./header.css";
import logo from "../../assets/images/logo.png"
import "../../assets/css/responsive.css"


const Header = () =>{

    return(
        <div className="nav">
            <div className="nav-logo">
                <img src={logo} alt="logo"/>
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
            <div className="menu-icon">
                <box-icon name='menu-alt-right' color='#fff' size="md"></box-icon>
            </div>
        </div>
    )
}

export default Header;