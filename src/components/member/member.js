import React from "react";
import "./member.css"



const Member =(props) =>{
const {role, name} =props;


    return(
        <div className="member">
        <p>{role}</p>
        <h4>{name}</h4>
        </div>
    )
}

export default Member;