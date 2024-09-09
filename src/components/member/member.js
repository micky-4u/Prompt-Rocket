import React from "react";
import "./member.css"



const Member =(props) =>{
const {role_type, name}=props;


    return(
        <div className="member">
        <p>{role_type}</p>
        <h4>{name}</h4>
        </div>
    )
}

export default Member;