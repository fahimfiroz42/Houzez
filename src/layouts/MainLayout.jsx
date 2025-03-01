import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";


const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <ScrollRestoration/>

            <Outlet/>

            <Footer/>
            
        </div>
    );
};

export default MainLayout;