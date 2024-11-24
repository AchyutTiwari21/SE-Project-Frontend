import React from "react";
import { useSelector } from "react-redux";

export default function Succ() {
    const projectName = useSelector(state => state.auth.projectName);
    return(
        <div className="w-full flex justify-center items-center pt-48">

            <h1 className="text-white text-3xl font-bold">Your {projectName} project has been registered successfully!</h1>
        </div>
    )
}