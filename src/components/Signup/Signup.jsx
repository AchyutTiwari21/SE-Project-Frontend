import React, { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setUserData } from "../../app/authSlice.js";
import authService from "../../backendAPI/auth.js";

function Signup() {
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const create = async(data) => {
        console.log(data);
        
        try {
            const res = await authService.getOtp(data.email);
            if(res) {
                dispatch(setUserData(data));
                navigate('/otp');
            } else {
                throw new Error("Invalid Email/Username or already present!");
            }
        } catch (error) {
            setError(error.message);
            console.log("Error: ", error.message);
        }
    }

    return (
        <div class="container">
        <div id="signup">
            <h1 id="he">Signup</h1>
            <h2 id="he2">Already have account? <Link to="/login" id="an">Signin</Link></h2>
            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

            <form className="w-full flex flex-col justify-center items-center" onSubmit={handleSubmit(create)}>
            <div id="na">
                <label aria-placeholder="Enter your name" for="name" id="ln">Name: </label>
                <input 
                type="text" 
                id="name" 
                placeholder="Enter your full name..."
                {...register("name", {
                    required: true
                })}
                />
            </div>

            <div id="em">
                <label for="email" id="ln">Email: </label>
                <input 
                type="text" 
                id="email" 
                placeholder="Enter your email..."
                {...register("email", {
                    required: true
                })}
                />
            </div>

            <div id="ph">
                <label for="phone" id="ln">Username: </label>
                <input 
                type="text" 
                id="phone"
                placeholder="Enter your username..." 
                {...register("username", {
                    required: true
                })}
                />
            </div>

            <div id="ag">
                <label for="age" id="ln">Password: </label>
                <input 
                type="password"
                id="age" 
                placeholder="Enter your password..."
                {...register("password", {
                    required: true
                })}
                />
            </div>

            <div id="cn">
                <label for="company" id="ln">Company Name: </label>
                <input 
                type="text" 
                id="company" 
                placeholder="Enter your company name..."
                {...register("companyName", {
                    required: true
                })}
                />
            </div>


            <div id="tw">
                <label for="type" id="ln">Type of website: </label>
                <select 
                name="type" 
                id="type" 
                {...register("typeOfWebsite", {
                    required: true
                })}
                >
                    <option value="e-commerce">E-Commerce</option>
                    <option value="blogs">Blogs</option>
                    <option value="personal-website">Personal Website</option>
                    <option value="buisness-website">Buisness Website</option>
                    <option value="educational-website">Educational Website</option>
                    <option value="non-profit-website">Non-Profit Website</option>
                    <option value="community-forum">Community Forums</option>
                    <option value="web-portal">Web-Portal</option>
                </select>
            </div>
            <button type="submit" id="submit">Submit</button>
            </form>
        </div>
    </div>
    )
}

export default Signup;