import React from "react";
import Navbar from "../components/Navbar/Navbar";
import {Outlet} from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import Container from "../utils/Container";

const DashboardLayout = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Sidebar />
            </div>
            <Footer />
        </>
    );
};

export default DashboardLayout;
