import React from "react";

function Comm({
    photo,
    name,
    role,
    desc
}) {
    return (
        <div id="photo">
            <div className="w-1/3 flex flex-col items-center justify-center">
            <img className="w-60 h-60 rounded-xl" src={photo}  alt="" />
            <h2 className="text-xl font-white text-white">{name}</h2>
            <h2 className="text-lg font-white text-white">{role}</h2>
            </div>
            <div className="w-2/3">
            <p className="text-white text-lg font-medium">{desc}</p>
            </div>
        </div>
    );
}

export default Comm;