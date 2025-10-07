import {useState} from "react";
import {Link} from "react-router-dom";
import {HiBars3} from "react-icons/hi2";
import {MdOutlineCancel} from "react-icons/md";
import {useUserContext} from "../../context/AuthProvider";
import {config} from "../../utils/envCongif";
import toast from "react-hot-toast";

const Navbar = () => {
    const {logout} = useUserContext();
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
                    logout();
                    toast.success("Logout successfully.");
                } else {
                    // Even if backend fails, clear local auth
                    logout();
                    toast.success("Logged out.");
                }
            })
            .catch((err) => {
                console.log(err);
                // Clear local auth even if backend call fails
                logout();
                toast.success("Logged out.");
            });
    };

    return (
        <nav className="bg-gradient-to-r from-primary via-primary to-secondary sticky top-0 right-0 z-[99999999] py-5 shadow-lg border-b border-gray-700/50 backdrop-blur-sm">
            <div className="flex items-center font-medium justify-between container">
                <div className="md:w-auto w-full flex justify-between items-center">
                    <Link to="/" className="inline-flex items-center group">
                        <div className="flex items-center gap-2">
                            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                <span className="text-2xl font-bold text-white">M</span>
                            </div>
                            <h1 className="text-2xl font-bold text-gray-200 group-hover:text-pink-400 transition-colors">
                                Mental <span className="text-pink-500">Health</span>
                            </h1>
                        </div>
                    </Link>
                    <div
                        className="text-3xl md:hidden text-gray-300 cursor-pointer hover:text-pink-500 transition-colors"
                        onClick={() => setOpen(!open)}>
                        {open ? <MdOutlineCancel /> : <HiBars3 />}
                    </div>
                </div>
                <ul className="md:flex hidden items-center gap-2 font-[Poppins]">
                    <li>
                        <Link
                            to="/"
                            className="px-4 py-2 rounded-lg hover:bg-gray-700/50 duration-300 font-medium text-gray-200 text-sm transition-all">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className="px-4 py-2 rounded-lg hover:bg-gray-700/50 duration-300 font-medium text-gray-200 text-sm transition-all">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/resources"
                            className="px-4 py-2 rounded-lg hover:bg-gray-700/50 duration-300 font-medium text-gray-200 text-sm transition-all">
                            Resources
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/journals"
                            className="px-4 py-2 rounded-lg hover:bg-gray-700/50 duration-300 font-medium text-gray-200 text-sm transition-all">
                            Journals
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/meditations"
                            className="px-4 py-2 rounded-lg hover:bg-gray-700/50 duration-300 font-medium text-gray-200 text-sm transition-all">
                            Meditations
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/chat-with-bot"
                            className="px-4 py-2 rounded-lg hover:bg-gray-700/50 duration-300 font-medium text-gray-200 text-sm transition-all">
                            Chat
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/dashboard/profile"
                            className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 border border-purple-500/30 duration-300 font-medium text-gray-200 text-sm transition-all">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <button
                            onClick={handleLogout}
                            className="px-6 py-2 btn-primary rounded-lg shadow-lg hover:shadow-pink-500/50 transition-all">
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
                            onClick={() => setOpen(false)}
                            className="inline-block hover:text-gray-400 duration-300 font-medium text-gray-200 text-lg px-3">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            onClick={() => setOpen(false)}
                            className="inline-block hover:text-gray-400 duration-300 font-medium text-gray-200 text-lg">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/resources"
                            onClick={() => setOpen(false)}
                            className="inline-block hover:text-gray-400 duration-300 font-medium text-gray-200 text-lg">
                            Resources
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/journals"
                            onClick={() => setOpen(false)}
                            className="inline-block hover:text-gray-400 duration-300 font-medium text-gray-200 text-lg">
                            Journals
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/meditations"
                            onClick={() => setOpen(false)}
                            className="inline-block hover:text-gray-400 duration-300 font-medium text-gray-200 text-lg">
                            Meditations
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/chat-with-bot"
                            onClick={() => setOpen(false)}
                            className="inline-block hover:text-gray-400 duration-300 font-medium text-gray-200 text-lg">
                            Chat
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/dashboard/profile"
                            onClick={() => setOpen(false)}
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
