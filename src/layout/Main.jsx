import {Outlet, useLocation} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import {useEffect} from "react";
import {IStaticMethods} from "preline/preline";
window.HSStaticMethods = IStaticMethods;

const Main = () => {
    const location = useLocation().pathname;
    useEffect(() => {
        window?.HSStaticMethods?.autoInit();
    }, [location]);
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Main;
