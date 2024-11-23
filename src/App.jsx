import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Otp } from "./components/OTPInput/Otp";
import "./App.css";

function App() {

  return (
    <>
       <Header />
       <Otp />
       {/* <Outlet /> */}
       <Footer />
    </>
  )
}

export default App
