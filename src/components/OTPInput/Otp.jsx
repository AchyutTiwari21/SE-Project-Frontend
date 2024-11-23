import { useRef, useState } from "react";
import authService from "../../backendAPI/auth";
import { login } from "../../app/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SubOtpBox from "./SubOtpBox";

export function Otp({ 
    number=6
}) {
    const userData = useSelector(state => state.auth.userData);
    const [error, setError] = useState("");

    const [attemptLeft, setAttemptLeft] = useState(3);

    const ref = useRef(Array(number).fill(0));
    const [values, setValues] = useState(Array(number).fill(""));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = async (values) => {
        const otp = values.join("");
        const data = {...userData, otp: otp}

        console.log(data);
        
        setError("");
        try {
            const res = await authService.createAccount(data);
            if(res) {
                const userData = await authService.getCurrentUser();
                if(userData) dispatch(login(userData));
                navigate('/');
            } else {
                throw new Error("Unable to signup!");
            }
        } catch (error) {
            setError(error.message);
            setValues(e => e.map(value => value = ""));
            setAttemptLeft(prev => prev-1);
            console.log("Error while singing up!");
        }
    }

    if(attemptLeft <= 0) {
        navigate('/signup');
    }

    return ( 
    
       <div className="w-full flex-col justify-center items-center m-12">

        <div className="w-full flex justify-center items-center mb-6">
        <h1 className="text-xl font-semibold text-white">Enter the OTP sent at email: achyut.s.tiwari@gmail.com</h1>
        </div>

        <div className="w-full flex justify-center items-center mb-6">
        <h1 className="text-xl font-semibold text-white">Attempt Left: {attemptLeft}</h1>
        </div>

    
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        
        <div className="flex justify-center items-center">
        {Array(number).fill(1).map((x, index) => 
        <SubOtpBox 
        reference={e => ref.current[index] = e} 
        key={index} 
        onDone={async () => {
            if (index + 1 >= number) {
                return;
            }
            ref.current[index + 1].focus();
        }} 
        goBack={() => {
            if (index == 0) {
                return;
            }
            setValues(e => e.map((x, i) => i === index-1 ? x = "" : x));
            ref.current[index - 1].focus();
        }} 
        values={values}
        setValues={setValues}
        index={index}
        />)}
        </div>

        <div className="w-full flex justify-center mt-6">
        <button 
        onClick={() => submit(values)}
        className="p-4 font-normal text-white bg-purple-800 hover:bg-purple-950 rounded-2xl"
        >
            Submit
        </button>
        </div>
    </div>
    );
}