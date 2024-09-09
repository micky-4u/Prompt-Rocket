import React from "react";
import "../assets/css/index.css"
import pc from "../assets/images/pc.png"
import left from "../assets/images/left.png"
import right from "../assets/images/right.png"
import Footer from "../components/footer/footer";
import Member from "../components/member/member";

const Home = ()=>{

    return(
        <div className="home">
            <div className="home-content">
                <div className="left">
                    <img src={left} alt="left"/>
                </div>
                <div className="mid">
                    <h1>Enjoy the power and more</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.N
                        eque magnam mollitia architecto delectus voluptatem, nam, 
                        praesentium voluptatum id est ex officia laboriosam consectetur 
                        molestias reiciendis unde minus, vero maxime aspernatur!

                    </p>
                    <div>
                        <button>Get Started</button>
                        <button>Learn more</button>
                    </div>
                </div>
                <div className="right">
                    <img src={right} alt="right" />
                </div>

            </div>
            <div className="pc">

                <img src={pc} alt="pcimage" />
            </div>
            <div className="bottom-btn" >
                <div>
                    <p>Download button</p>
                </div>
            </div>

            <div className="article">
                <div>
                    <div className="circle"></div>
                </div>
                <div>
                    <h1>
                        Improved Banking Experience
                    </h1>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.N
                        eque magnam mollitia architecto delectus voluptatem, nam, 
                    </p>

                    <div>
                        <p>Learn More</p>
                    </div>
                </div>
            </div>

            <div className="article reverse">
                <div>
                    <div className="circle"></div>
                </div>
                <div>
                    <h1>
                        Know your business
                    </h1>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.N
                        eque magnam mollitia architecto delectus voluptatem, nam, 
                    </p>
                    <ul>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                    </ul>
                    <div>
                        <p>Learn More</p>
                    </div>
                </div>
            </div>

            <div className="article">
                <div>
                    <div className="circle"></div>
                </div>
                <div>
                    <h1>
                        Improved Banking Experience
                    </h1>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.N
                        eque magnam mollitia architecto delectus voluptatem, nam, 
                        praesentium voluptatum id est ex officia laboriosam consectetur 
                    </p>

                    <div>
                        <p>Learn More</p>
                    </div>
                </div>
            </div>
            <div className="team">

                <h1>Meet the team</h1>
                <div className="members">
                    <Member role ="CEO" name="Jonathan Mensah"/>
                    <Member role ="CEO" name="Jonathan Mensah"/>
                    <Member role ="CEO" name="Jonathan Mensah"/>
                    <Member role ="CEO" name="Jonathan Mensah"/>
                    <Member role ="CEO" name="Jonathan Mensah"/>

                    
                </div>
                <div className="mail">
                    <div>
                        <h3>Let's get you started</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        </p>
                    </div>
                    <div>
                        <input type="mail" placeholder="Your email...." />
                        <button>Make an enquiry</button>
                    </div>
                </div>
            </div>


        <Footer />
        </div>
    )
}

export default Home;