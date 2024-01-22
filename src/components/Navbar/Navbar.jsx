import {useState} from "react";
import {Link} from "react-router-dom";
import {HiBars3} from "react-icons/hi2";
import {MdOutlineCancel} from "react-icons/md";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className="bg-[#0d1117] sticky -top-0 right-0 z-[99999999]  md:py-3 py-2">
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
                        className="text-3xl md:hidden"
                        onClick={() => setOpen(!open)}>
                        {open ? <MdOutlineCancel /> : <HiBars3 />}
                    </div>
                </div>
                <ul className="md:flex hidden  items-center gap-7 font-[Poppins]">
                    <li>
                        <Link
                            to="/"
                            className="inline-block hover:text-rose-500 duration-300 font-medium text-gray-100 text-lg">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/services"
                            className="inline-block hover:text-rose-500 duration-300 font-medium text-gray-100 text-lg">
                            Journaling
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/portfolio"
                            className="inline-block hover:text-rose-500 duration-300 font-medium text-gray-100 text-lg">
                            Dashboard
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/about"
                            className="inline-block hover:text-rose-500 duration-300 font-medium text-gray-100 text-lg">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className="inline-block hover:text-rose-500 duration-300 font-medium text-gray-100 text-lg">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <button className="py-1.5 btn-primary">Logout</button>
                    </li>
                </ul>
                <ul
                    className={`md:hidden text-center bg-black fixed w-full top-16 overflow-y-auto bottom-0 py-10 mt-7 pl-4 duration-500 ${
                        open ? "left-0" : "left-[-100%]"
                    }
        `}>
                    <li className="mt-14">
                        <Link
                            to="/"
                            className="inline-block hover:text-rose-500 duration-300 font-medium text-gray-100 text-lg px-3">
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/services"
                            className="inline-block hover:text-rose-500 duration-300 font-medium text-gray-100 text-lg px-3">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/portfolio"
                            className="inline-block hover:text-rose-500 duration-300 font-medium text-gray-100 text-lg px-3">
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/pricing"
                            className="inline-block hover:text-rose-500 duration-300 font-medium text-gray-100 text-lg px-3">
                            Pricing
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
