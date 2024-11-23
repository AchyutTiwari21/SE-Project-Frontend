import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../app/authSlice";
import { useForm } from "react-hook-form";
import authService from "../../backendAPI/auth";

function Login() {

    const { register, handleSubmit } = useForm();
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const loginUser = async(data) => {
        setError('');
        try {
            const response = await authService.login(data);
            if(response) {
                const userData = await authService.getCurrentUser();
                if(userData) dispatch(login(userData));
                navigate('/');
            } else {
                throw new Error('Unable to login!');
            }
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div class="container">
        <div id="login">
            <h1 id="he">Login</h1>
            <h2 id="he2">Do not have any account? <Link to="/signup" id="an" >Sing Up</Link></h2>
            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

            <form className="w-full flex flex-col justify-center items-center" onSubmit={handleSubmit(loginUser)}>

            <div id="us">
                <label aria-placeholder="Enter your username" for="username" id="lu">Username: </label>
                <input 
                type="text" 
                id="username"
                placeholder="Enter your username..."
                {...register("username", {
                    required: true
                })} 
                />
            </div>

            <div id="em">
                <label for="email" id="le">Email: </label>
                <input 
                type="text" 
                id="email" 
                placeholder="Enter your email..."
                {...register("email", {
                    required: true
                })}
                />
            </div>

            <div id="pw">
                <label for="password" id="lp">Password: </label>
                <input 
                type="password" 
                id="password" 
                placeholder="Enter your password..."
                {...register("password", {
                    required: true
                })}
                />
            </div>

            <button type="submit" id="submit">Submit</button>
            </form>

            <a href="#" id="drem">Forgot password?</a>
        </div>
        </div>
    );
}

export default Login;