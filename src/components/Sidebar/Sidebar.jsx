import React from "react";
import {ImProfile} from "react-icons/im";
import {IoAdd, IoJournal} from "react-icons/io5";
import {Link, Outlet} from "react-router-dom";
import {useUserContext} from "../../context/AuthProvider";

const Sidebar = () => {
    const {user} = useUserContext();
    console.log(user);
    return (
        <div className="flex space-x-4 my-9">
            <div className=" p-4 w-72 bg-primary  text-dark  shadow-xl">
                <div className="flex flex-col">
                    <div className="space-y-4">
                        <div className="flex flex-col justify-center items-center mt-8">
                            <img
                                className="w-20 h-20 object-cover rounded-full"
                                src={user?.avatar}
                                alt=""
                            />
                            <h2 className="text-lg font-semibold">
                                {user?.name}
                            </h2>
                            <p>{user?.email}</p>
                        </div>

                        <div className="pt-3">
                            <Link
                                to={"profile"}
                                className="text-center w-full  mt-3 inline-flex items-center font-semibold hover:bg-gray-500  px-3 py-2 rounded-lg">
                                <ImProfile size={20} className="mr-2" /> Profile
                            </Link>
                            <Link
                                to={"journaling"}
                                className="text-center w-full  mt-3 inline-flex items-center font-semibold hover:bg-gray-500  px-3 py-2 rounded-lg">
                                <IoJournal size={20} className="mr-2" />
                                My Journals
                            </Link>
                            <Link
                                to={"add-journal"}
                                className="text-center w-full  mt-3 inline-flex items-center font-semibold hover:bg-gray-500  px-3 py-2 rounded-lg">
                                <IoAdd size={20} className="mr-2" />
                                Add Journaling
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" flex-1 h-[80vh] p-5 overflow-x-hidden overscroll-y-auto">
                <div className="">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
