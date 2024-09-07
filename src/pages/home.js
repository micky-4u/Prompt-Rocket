import React from "react";
import "../assets/css/index.css"
const Home = ()=>{

    return(
        <div className="home">
            <div className="home-content">
                <div className="left"></div>
                <div className="mid">
                    <h1>Enjoy the power and more</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.N
                        eque magnam mollitia architecto delectus voluptatem, nam, 
                        praesentium voluptatum id est ex officia laboriosam consectetur 
                        molestias reiciendis unde minus, vero maxime aspernatur!

                    </p>
                    <div>
                        <button>Right</button>
                        <button>Left</button>
                    </div>
                </div>
                <div className="right"></div>

            </div>
            <img className="pc" src="" alt="pcimage" />
            <div className="bottom-btn" ></div>
        </div>
    )
}

export default Home;