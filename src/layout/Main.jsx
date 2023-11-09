import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Main = () => {
    return (
        <div className="mx-auto bg-[#F7F4F0]">
            <Navbar></Navbar>
            <div className="container mx-auto">
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;