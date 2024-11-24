import React from "react";
import { useDispatch, useSelector } from "react-redux";
import authService from "../backendAPI/auth";
import {useNavigate} from "react-router-dom"
import { setProjectName } from "../app/authSlice";

function WebCard({
    imgUrl,
    para,
    day,
    amount,
    title
}) {
    const dispath = useDispatch();
    const navigate = useNavigate();
    const status = useSelector(state => state.auth.status);

    const cont = async () => {
        if(!status) {
            alert("Signup to continue!");
        } else {
            try {
                const response = await authService.registerWeb({webName:title, price:`$${amount}`});
                if(!response) {
                    alert("Unable to register the website.");
                } else {
                    const sendMail = await authService.receiveEmail();
                    if(sendMail) {
                        dispath(setProjectName(title));
                        navigate("/succ");
                    } else {
                        alert("Unable to register the website.");
                    }
                }
            } catch (error) {
                alert(error.message);
            }
        }
    }

    return (
        <div className="w-[360px] h-[500px] rounded-2xl flex flex-col justify-center items-center" id="web-card">
            <img src={imgUrl} alt="" className="w-[360px] h-[280px] rounded-lg"/>

            <p className="text-white text-base mt-6">{para}</p>

            <div className="w-full inline-flex items-center justify-between mt-4 px-4">
            <div className="inline-flex items-center"> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <p className="text-white text-sm">{day} day delivery</p>
            </div>   

            <div>
                <p className="text-white text-sm">From: ${amount}</p>
            </div>
            </div>

            <div className="w-full inline-flex justify-between">
            <button 
            className="w-full h-12 bg-purple-500 hover:bg-purple-950 rounded-full mt-4"
            onClick={cont}
            >
                Continue(${amount})
            </button>
            </div>

        </div>
    );
}

export default WebCard;