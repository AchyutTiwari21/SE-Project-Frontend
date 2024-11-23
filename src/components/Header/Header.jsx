import React from "react";
import WebsiteLogo from "../../images/EMBUSS.png";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {logout as authLogout} from "../../app/authSlice.js";
import authService from "../../backendAPI/auth.js";
import { useNavigate } from "react-router-dom";

function Header() {
    const dispath = useDispatch();
    const status = useSelector((state) => state.auth.status);
    const navigate = useNavigate();

    const logout = async() => {
        const res = await authService.logout();
        if(res) {
            dispath(authLogout());
            navigate('/');
        }
    }

    return (
        <header>
            <div>
                <Link to="/">
                <img id="logo" src={WebsiteLogo} alt="" />
                </Link>
            </div>

            <nav className="inline-flex space-x-8">
                <NavLink 
                to="/" 
                className={({isActive}) => `text-xl hover:text-purple-400  ${isActive ? 'text-purple-300 font-bold':'text-white font-normal'}`}
                >
                    Home
                </NavLink> 

                <NavLink
                to="/contact"
                className={({isActive}) => `text-xl hover:text-purple-400  ${isActive ? 'text-purple-300 font-bold':'text-white font-normal'}`}
                >
                    Contact
                </NavLink>

                <NavLink 
                to='/about'  
                className={({isActive}) => `text-xl hover:text-purple-400  ${isActive ? 'text-purple-300 font-bold':'text-white font-normal'}`}
                >
                    About
                </NavLink>
                <a href=""  className="font-normal text-xl text-white hover:text-purple-300">Pricing</a>
            </nav>

            <div class="bu">
                <a href="http://127.0.0.1:5500/SE-Project/myntra%20copy/SampleWeb.html">
                <button id="ge">Get Started</button>
                </a>
                {
                !status ?
                (
                <Link to="/login">
                <button id="lo">Login</button>
                </Link>
                ) : 
                (
                <button 
                 id="lo"
                 onClick={logout}
                 >
                    Logout
                 </button>
                )}
                
            </div>
        </header>
    )
}

export default Header;