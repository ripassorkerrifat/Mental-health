import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

const DashboardLayout = () => {
    return (
        <div className="min-h-screen bg-secondary">
            <Navbar />
            <div className="container">
                <Sidebar />
            </div>
        </div>
    );
};

export default DashboardLayout;
