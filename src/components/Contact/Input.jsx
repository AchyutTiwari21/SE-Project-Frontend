import React, {useId} from "react";

function Input({
    label,
    placeholder,
    type = "text"
}) {
    const id = useId();
    return (
        <div className="flex flex-col">
            <label id={id} className="text-base text-white font-normal">{label}</label>
            <input 
            type={type}
            className="w-72 h-10 bg-gray-900 text-white text-sm rounded-sm p-2"
            aria-describedby={id}
            placeholder={placeholder}
            />
        </div>
    );
}

export default Input;