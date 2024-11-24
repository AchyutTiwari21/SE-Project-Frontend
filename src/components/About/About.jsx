import React from "react";
import CompanyLogo from "../../images/EMBUSS.png"
import "./About.css"
import Comm from "./Comm";
import Rphoto from "../../images/Rupesh.jpg";
import Vphoto from "../../images/VikasChauhan.jpg";
import Jphoto from "../../images/Jai.png";
import Me from "../../images/Me.jpg";

function About() {
    return (
        <div className="w-full h-auto">
            <div className="w-full h-auto flex justify-center mt-8 p-12 border-b-[1px] border-white border-opacity-50">
                <img className="w-60 h-60 rounded-2xl" src={CompanyLogo} alt="Company Logo"/>
                <div id="para">
                <p className="text-white font-bold text-xl">At Empowering Business, we specialize in creating high-impact e-commerce and business websites tailored to the unique needs of each client. Our mission is simple: to empower businesses by building innovative, user-friendly websites that drive growth, engage customers, and enhance brand presence in the digital space. Whether you’re a startup looking to establish your online footprint or an established business seeking a refreshed, scalable e-commerce platform, we have the expertise to bring your vision to life.
                    <br />
                Our team of skilled designers, developers, and digital strategists works closely with clients to deliver solutions that align with their goals.</p>
                </div>
            </div>

            <div className="flex items-center justify-center flex-col p-12">
                <h1 className="text-3xl text-white font-bold">Community</h1>

                <Comm
                photo={Jphoto}
                name="Jai Goyal"
                role="Backend Developer"
                desc="Jai Goyal made a significant impact on our college Software Engineering Project through his dual role as a Backend Developer and Frontend Developer. In the backend, Jai was instrumental in designing and implementing robust server-side logic, ensuring seamless data management and secure API development. He worked with technologies such as Node.js and MongoDB, optimizing database queries and building scalable solutions to handle complex workflows efficiently. His attention to detail ensured the backend was reliable, secure, and easy to integrate.

                On the frontend, Jai contributed by implementing key features and functionalities, translating designs into responsive and interactive elements using React." 
                />

                <Comm
                photo={Me}
                name="Achyut Tiwari"
                role="Backend Developer"
                desc="Achyut Tiwari played a vital role as the backend developer for our Software Engineering (SE) project, showcasing exceptional technical expertise and problem-solving skills. He developed robust APIs that ensured seamless communication between the frontend and backend, managed the database efficiently, and optimized query performance to enhance the system’s functionality.
                Achyut was instrumental in integrating backend modules and conducted thorough testing to ensure reliability and security. His efforts in optimizing server performance reduced latency, improving the overall user experience.

                Beyond his technical contributions, Achyut’s proactive approach, teamwork, and dedication greatly contributed to the project’s success. His ability to address challenges with innovative solutions proved invaluable, and his hard work has been deeply appreciated by the entire team."
                />

                <Comm
                photo={Vphoto}
                name="Vikas Chauhan"
                role="UI/UX Designer"
                desc="Vikas Chauhan played a pivotal role as a Frontend Developer and UI/UX Designer in our college Software Engineering Project, bringing creativity and technical expertise to the team. As the UI/UX designer, he conceptualized and designed a user-friendly, aesthetically pleasing interface, ensuring that the application was intuitive and engaging. His ability to understand user behavior and translate it into seamless design elements significantly enhanced the usability of our project.
                In his role as a Frontend Developer, Vikas skillfully translated his designs into functional, responsive components using modern frontend frameworks and tools like React and CSS3. He emphasized a mobile-first approach, ensuring consistent performance across devices. Vikas also collaborated effectively with backend developers to integrate APIs, ensuring smooth data flow within the application." 
                />

                <Comm 
                photo={Rphoto}
                name="Rupesh Singh Rawat"
                role="Frontend Developer"
                desc="Rupesh Singh Rawat made significant contributions as a Frontend Developer in our college Software Engineering Project by designing and implementing an intuitive, visually appealing, and responsive user interface. He prioritized mobile-first design, created reusable components, and optimized the frontend for performance, resulting in a seamless and efficient user experience. Collaborating closely with backend developers, he ensured smooth integration across the application and actively resolved issues to enhance stability. His dedication to refining the UI based on user feedback added substantial value to the project, making his role critical to our team’s success. He made useful contribuion in developing our website. Withour his contribution we would have not been able to do this development."
                />

                

            </div>
        </div>
    );
}

export default About;