import React from "react";
import "./footer.css"
import logo from "../../assets/images/logo.png"


const Footer =() =>{

    return(
        <div className="footer">
            <div className="top-section">
                <div>
                    <img src={logo} alt="logo" />
                    
                    <p>
                    orem ipsum dolor sit amet consectetur adipisicing elit.N
                        eque magnam mollitia architecto delectus voluptatem, nam, 
                        praesentium voluptatum id est ex officia laboriosam consectetur 
                    </p>
                </div>
                <div>
                    <div>
                        <h4>
                            Why Prompt
                        </h4>
                        <ul>
                            <li>Blogs</li>
                            <li>Affiliated Programs</li>
                            <li>Partner Programs</li>

                        </ul>
                    </div>
                    <div>
                        <h4>
                            Company
                        </h4>
                        <ul>
                            <li>About</li>
                            <li>FAQs</li>
                            <li> Community</li>

                        </ul>
                    </div>
                    <div>
                        <h4>
                            Contacts
                        </h4>
                        <ul>
                            <li>prompt@gmail.com</li>
                            <li>+233 (0) 55 656 3567 </li>
                            <li>Partner </li>

                        </ul>
                    </div>



                </div>
            </div>
            <div className="bottom-section">
                <div>
                    <p>&copy; copyright 2024</p>
                    <p>Privacy</p>
                    <p>Terms</p>
                </div>
                
            </div>
        </div>
    )
}


export default Footer;