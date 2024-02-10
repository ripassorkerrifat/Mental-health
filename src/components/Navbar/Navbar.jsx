import {useState} from "react";
import {Link} from "react-router-dom";
import {HiBars3} from "react-icons/hi2";
import {MdOutlineCancel} from "react-icons/md";
import {useUserContext} from "../../context/AuthProvider";
import {config} from "../../utils/envCongif";
import toast from "react-hot-toast";

const Navbar = () => {
    const {setUser, token, setToken} = useUserContext();
    const [open, setOpen] = useState(false);

    const handleLogout = () => {
        fetch(`${config.base_url}/auth/logout`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    localStorage.removeItem("accessToken");
                    setToken("");
                    setUser(null);
                    toast.success("Logout successfully.");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <nav className="bg-primary sticky -top-0 right-0 z-[99999999]  md:py-4 py-2">
            <div className="flex items-center font-medium justify-between container">
                <div className="md:w-auto w-full flex justify-between items-center">
                    <Link to="/" className="inline-flex items-center">
                        <img
                            src="/public/logoo.png"
                            className=" w-[90px]  h-[75px] "
                            alt=""
                        />
                    </Link>
                    <div
                        className="text-3xl md:hidden text-gray-300"
                        onClick={() => setOpen(!open)}>
                        {open ? <MdOutlineCancel /> : <HiBars3 />}
                    </div>
                </div>
                <ul className="md:flex hidden  space-x-1 items-center gap-7 font-[Poppins]">
                    <li>
                        <Link
                            to="/"
                            className="inline-block hover:text-gray-400 duration-300 font-medium text-gray-200 text-lg">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/journals"
                            className="inline-block hover:text-gray-400 duration-300 font-medium text-gray-200 text-lg">
                            Journals
                        </Link>
                    </li>{" "}
                    <li>
                        <Link
                            to="/breathing-exercises"
                            className="inline-block hover:text-gray-400 duration-300 font-medium text-gray-200 text-lg">
                            Exersices
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/meditations"
                            className="inline-block hover:text-gray-400 duration-300 font-medium text-gray-200 text-lg">
                            Meditations
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/chat-with-bot"
                            className="inline-block hover:text-gray-400 duration-300 font-medium text-gray-200 text-lg">
                            Chat Bot
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/dashboard/profile"
                            className="inline-block hover:text-gray-400 duration-300 font-medium text-gray-200 text-lg">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <button
                            onClick={handleLogout}
                            className="py-1.5 btn-primary">
                            Logout
                        </button>
                    </li>
                </ul>
                <ul
                    className={`md:hidden flex flex-col space-y-3 text-center bg-secondary fixed w-full top-16 overflow-y-auto bottom-0 py-10 mt-7 pl-4 duration-500 ${
                        open ? "left-0" : "left-[-100%]"
                    }
        `}>
                    <li className="mt-14">
                        <Link
                            to="/"
                            className="inline-block hover:text-gray-400 duration-300 font-medium text-gray-200 text-lg px-3">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/journals"
                            className="inline-block hover:text-gray-400 duration-300 font-medium text-gray-200 text-lg">
                            Journals
                        </Link>
                    </li>{" "}
                    <li>
                        <Link
                            to="/breathing-exercises"
                            className="inline-block hover:text-gray-400 duration-300 font-medium text-gray-200 text-lg">
                            Exersices
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/meditations"
                            className="inline-block hover:text-gray-400 duration-300 font-medium text-gray-200 text-lg">
                            Meditations
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/chat-with-bot"
                            className="inline-block hover:text-gray-400 duration-300 font-medium text-gray-200 text-lg">
                            Chat with Bot
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/dashboard/profile"
                            className="inline-block hover:text-gray-400 duration-300 font-medium text-gray-200 text-lg">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <button
                            onClick={handleLogout}
                            className="py-1.5 btn-primary">
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
