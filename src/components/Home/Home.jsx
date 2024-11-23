import React, {useEffect} from "react";
import LandingDashboard from "../../images/LandingDashboard.png"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {

    const status = useSelector((state) => state.auth.status);

    const text = "Get your own Website!";
    let index = 0;
    
    function typeEffect() {
        if (index < text.length) {
            document.getElementById("header").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100); 
        }
    }
    useEffect(typeEffect, []);

    return (
        <main>
        <div class="text">
            <div>
                <h1 id="header"></h1>
            </div>
            <div id="ridiv">
                <h1 id="p1" className="text-2xl font-bold">Build your entire website and go online in this modern era of Online Shopping. Add all your products to the website and reach customers through online business stores. We are specialized in making E-Commerce and Business Website.</h1>
                <div  class="buttons">
                    {
                        !status &&
                        <Link to="/signup">
                        <button id="register">Register Now</button>
                        </Link>
                    }
                    <a href="http://127.0.0.1:5500/SE-Project/myntra%20copy/SampleWeb.html" target="blank">
                    <button id="sample">Show Demo</button>
                    </a>
                </div>
            </div>
        </div>

        <div id="imageContainer" >
            <img id="image" src={LandingDashboard} alt="" />
        </div>
    </main>
    )
}

export default Home;