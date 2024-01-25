import React from "react";
import {FaHome} from "react-icons/fa";
import {ImProfile} from "react-icons/im";
import {IoAdd, IoJournal} from "react-icons/io5";
import {Link, Outlet} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="flex space-x-4 my-9">
            <div className=" p-4 w-72 bg-gray-50  text-dark shadow-gray-300 shadow-2xl">
                <div className="flex flex-col">
                    <div className="space-y-4">
                        <div className="flex flex-col justify-center items-center mt-8">
                            <img
                                className="w-20 h-20 rounded-full"
                                src="https://images.filmibeat.com/img/popcorn/profile_photos/meenakshi-chaudhary-20201018102010-48130.jpg"
                                alt=""
                            />
                            <h2 className="text-lg font-semibold">
                                Ripas Sorker Rifat
                            </h2>
                            <p>ripassorkerrifat@gmail.com</p>
                        </div>

                        <div className="pt-3">
                            <Link
                                to={"/"}
                                className="text-center w-full  mt-3 inline-flex items-center font-semibold hover:bg-gray-200 px-3 py-2 rounded-lg">
                                <FaHome size={20} className="mr-2" /> Home
                            </Link>
                            <Link
                                to={"profile"}
                                className="text-center w-full  mt-3 inline-flex items-center font-semibold hover:bg-gray-200 px-3 py-2 rounded-lg">
                                <ImProfile size={20} className="mr-2" /> Profile
                            </Link>
                            <Link
                                to={"journaling"}
                                className="text-center w-full  mt-3 inline-flex items-center font-semibold hover:bg-gray-200 px-3 py-2 rounded-lg">
                                <IoJournal size={20} className="mr-2" />
                                Journaling
                            </Link>
                            <Link
                                to={"profile"}
                                className="text-center w-full  mt-3 inline-flex items-center font-semibold hover:bg-gray-200 px-3 py-2 rounded-lg">
                                <IoAdd size={20} className="mr-2" />
                                Add Journaling
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" flex-1 h-[86vh] p-5 overflow-x-hidden overscroll-y-auto">
                <div className="">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
