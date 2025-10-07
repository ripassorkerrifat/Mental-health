import {MdFacebook} from "react-icons/md";
import {FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

const Footer = () => {
    return (
        <motion.footer
            whileInView={{opacity: [0, 1], y: [0, -1]}}
            transition={{duration: 1.1, delay: 0.1}}
            className="relative pt-16 pb-8 bg-gradient-to-b from-primary to-secondary border-t border-gray-700/50">
            <div className="container">
                <div className="flex flex-wrap text-left md:text-left">
                    <div className="w-full md:w-6/12 mb-8 md:mb-0">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                                <span className="text-3xl font-bold text-white">M</span>
                            </div>
                            <h1 className="text-3xl font-bold text-gray-200">
                                Mental <span className="text-pink-500">Health</span>
                            </h1>
                        </div>
                        <p className="text-base mt-4 mb-4 text-gray-300 max-w-md">
                            Your journey to mental wellness starts here. We provide tools, 
                            resources, and support for a healthier mind.
                        </p>
                        <h5 className="text-sm font-semibold mb-3 text-gray-400">
                            Connect with us on social media
                        </h5>
                        <div className="flex gap-3">
                            <button
                                className="bg-blue-600/20 hover:bg-blue-600/30 inline-flex text-blue-400 h-10 w-10 items-center justify-center rounded-lg border border-blue-500/30 hover:scale-110 transition-all"
                                type="button">
                                <MdFacebook size={20} />
                            </button>

                            <button
                                className="bg-pink-600/20 hover:bg-pink-600/30 inline-flex text-pink-400 h-10 w-10 items-center justify-center rounded-lg border border-pink-500/30 hover:scale-110 transition-all"
                                type="button">
                                <FaInstagram size={20} />
                            </button>

                            <button
                                className="bg-purple-600/20 hover:bg-purple-600/30 inline-flex text-purple-400 h-10 w-10 items-center justify-center rounded-lg border border-purple-500/30 hover:scale-110 transition-all"
                                type="button">
                                <FaTwitter size={20} />
                            </button>

                            <button
                                className="bg-green-600/20 hover:bg-green-600/30 inline-flex text-green-400 h-10 w-10 items-center justify-center rounded-lg border border-green-500/30 hover:scale-110 transition-all"
                                type="button">
                                <FaLinkedin size={20} />
                            </button>
                        </div>
                    </div>
                    <div className="w-full md:w-6/12">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full md:w-4/12 md:px-4 ml-auto">
                                <p className="text-gray-200 font-bold mb-4 text-lg">
                                    Useful Links
                                </p>
                                <ul className="list-unstyled space-y-2">
                                    <li>
                                        <Link
                                            to={"/about"}
                                            className="text-gray-300 hover:text-pink-400 duration-300 transition-colors text-sm">
                                            → About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={"/resources"}
                                            className="text-gray-300 hover:text-pink-400 duration-300 transition-colors text-sm">
                                            → Resources
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={"/journals"}
                                            className="text-gray-300 hover:text-pink-400 duration-300 transition-colors text-sm">
                                            → Journaling
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={"/contact"}
                                            className="text-gray-300 hover:text-pink-400 duration-300 transition-colors text-sm">
                                            → Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full md:w-4/12 md:px-4 md:mt-0 mt-8">
                                <p className="text-gray-200 font-bold mb-4 text-lg">
                                    Other Resources
                                </p>
                                <ul className="list-unstyled space-y-2">
                                    <li>
                                        <Link
                                            to="/privacy"
                                            className="text-gray-300 hover:text-pink-400 duration-300 transition-colors text-sm">
                                            → Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/terms"
                                            className="text-gray-300 hover:text-pink-400 duration-300 transition-colors text-sm">
                                            → Terms &amp; Conditions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/meditations"
                                            className="text-gray-300 hover:text-pink-400 duration-300 transition-colors text-sm">
                                            → Meditations
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/chat-with-bot"
                                            className="text-gray-300 hover:text-pink-400 duration-300 transition-colors text-sm">
                                            → Chat Support
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t mt-8 pt-6 border-gray-700/50"></div>
                <div className="flex flex-wrap items-center md:justify-between justify-center gap-4">
                    <div className="text-sm text-gray-400">
                        © 2025 <span className="text-pink-400 font-semibold">Mental Health</span>. All rights reserved.
                    </div>
                    <div className="text-sm text-gray-400">
                        Made with <span className="text-red-500">❤️</span> for better mental wellness
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
