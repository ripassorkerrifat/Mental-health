import React from "react";
import {ImProfile} from "react-icons/im";
import {IoAdd, IoJournal, IoSad} from "react-icons/io5";
import {FaBullseye, FaChartBar} from "react-icons/fa";
import {Link, Outlet} from "react-router-dom";
import {useUserContext} from "../../context/AuthProvider";

const Sidebar = () => {
    const {user} = useUserContext();
    const [activeLink, setActiveLink] = React.useState("profile");

    return (
        <div className="md:flex gap-6 my-8">
            {/* Sidebar */}
            <div className="md:w-80 w-full md:mb-0 mb-8">
                <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 shadow-2xl border border-gray-700/50 sticky top-24">
                    {/* User Profile Section */}
                    <div className="flex flex-col items-center mb-8 pb-6 border-b border-gray-700/50">
                        <div className="relative mb-4">
                            <img
                                className="w-24 h-24 object-cover rounded-full border-4 border-pink-500/50 shadow-lg"
                                src={user?.avatar}
                                alt={user?.name}
                            />
                            <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-primary"></div>
                        </div>
                        <h2 className="text-xl font-bold text-gray-200 mb-1">
                            {user?.name}
                        </h2>
                        <p className="text-sm text-gray-400">{user?.email}</p>
                    </div>

                    {/* Navigation Links */}
                    <nav className="space-y-2">
                        <Link
                            to={"profile"}
                            onClick={() => setActiveLink("profile")}
                            className="group flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-purple-500/20 hover:pl-6 text-gray-200">
                            <ImProfile size={20} className="text-pink-500 group-hover:scale-110 transition-transform" />
                            <span>Profile</span>
                        </Link>
                        <Link
                            to={"statistics"}
                            onClick={() => setActiveLink("statistics")}
                            className="group flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-cyan-500/20 hover:pl-6 text-gray-200">
                            <FaChartBar size={20} className="text-blue-500 group-hover:scale-110 transition-transform" />
                            <span>Statistics</span>
                        </Link>
                        <Link
                            to={"goals"}
                            onClick={() => setActiveLink("goals")}
                            className="group flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 hover:pl-6 text-gray-200">
                            <FaBullseye size={20} className="text-purple-500 group-hover:scale-110 transition-transform" />
                            <span>My Goals</span>
                        </Link>
                        <Link
                            to={"journaling"}
                            onClick={() => setActiveLink("journaling")}
                            className="group flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-green-500/20 hover:to-emerald-500/20 hover:pl-6 text-gray-200">
                            <IoJournal size={20} className="text-green-500 group-hover:scale-110 transition-transform" />
                            <span>My Journals</span>
                        </Link>
                        <Link
                            to={"add-journal"}
                            onClick={() => setActiveLink("add-journal")}
                            className="group flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-yellow-500/20 hover:pl-6 text-gray-200">
                            <IoAdd size={20} className="text-orange-500 group-hover:scale-110 transition-transform" />
                            <span>Add Journal</span>
                        </Link>
                        <Link
                            to={"my-write-mood"}
                            onClick={() => setActiveLink("my-write-mood")}
                            className="group flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-500/20 hover:to-purple-500/20 hover:pl-6 text-gray-200">
                            <IoSad size={20} className="text-indigo-500 group-hover:scale-110 transition-transform" />
                            <span>My Moods</span>
                        </Link>
                    </nav>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="md:flex-1 min-h-[calc(100vh-200px)]">
                <div className="bg-primary/50 rounded-2xl p-6 md:p-8 shadow-xl border border-gray-700/30">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
