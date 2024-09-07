import React from "react";
import "../assets/css/index.css"
import pc from "../assets/images/pc.png"
import left from "../assets/images/left.png"
import right from "../assets/images/right.png"

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
            <div className="bottom-btn" ></div>
        </div>
    )
}

export default Home;