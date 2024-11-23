import React from "react";
import Input from "./Input";

function About() {
    return (
        <div className="w-full flex flex-wrap justify-center p-20">
            <div className="w-[60%] bg-gray-800 p-4">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-8">Send Us a Message</h1>
                </div>

                <div className="w-full">
                    <form action="">
                        <div className="w-full flex justify-between mb-8">
                            <Input label="Name: " placeholder="Enter your name"/>
                            <Input label="Email: " placeholder="Enter your email"/>
                        </div>
                        <div className="w-full flex justify-between mb-8">
                            <Input label="Phone No.: " placeholder="Enter your phone no."/>
                            <Input label="Subject: " placeholder="Enter your email"/>
                        </div>
                        <label htmlFor="message"  className="text-base text-white font-normal mb-4">Message: </label>
                        <input 
                        type="text" 
                        className="w-full  h-10 bg-gray-900 text-white text-sm rounded-sm p-2"
                        placeholder="Enter your message"
                        />

                        <button 
                        type="submit"
                        className="w-40 text-white bg-purple-600 mt-8 h-12 rounded-lg hover:bg-purple-950"
                        >Submit</button>
                    </form>
                </div>
            </div>
            <div className="w-[30%] flex items-left justify-center flex-col bg-blue-800 p-8 pl-20">
                <div className="mb-8">
                    <p className="text-xl text-white font-bold">Contact Number:</p>
                    <p className="text-xl text-white font-bold">93839XXXXX</p>
                </div>
                <div className="mb-8">
                <p className="text-xl text-white font-bold">Email:</p>
                <p className="text-xl text-white font-bold">abc@gmail.com</p>
                </div>

                <div className="mb-8">
                <p className="text-xl text-white font-bold">Linkdin:</p>
                <p className="text-xl text-white font-bold"> abc123</p>
                </div>

                <div className="mb-8">
                <p className="text-xl text-white font-bold">Twitter:</p>
                <p className="text-xl text-white font-bold"> abc_432</p>
                </div>
            </div>
        </div>
    );
}

export default About;