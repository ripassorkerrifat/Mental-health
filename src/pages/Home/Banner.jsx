/* eslint-disable react/no-unescaped-entities */
import animation from "../../assets/Animation.json";
import Lottie from "lottie-react";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {FaArrowRight, FaBrain, FaHeart, FaSmile} from "react-icons/fa";

const Banner = () => {
    return (
        <div className="relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-purple-500/10"></div>
            
            <div className="container relative z-10 py-16 md:py-24">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        whileInView={{opacity: [0, 1], y: [30, 0]}}
                        transition={{duration: 0.7, delay: 0.2}}
                        initial={{opacity: 0}}
                        className="space-y-6">
                        
                        {/* Badge */}
                        <motion.div
                            whileInView={{opacity: [0, 1], scale: [0.8, 1]}}
                            transition={{duration: 0.5, delay: 0.3}}
                            initial={{opacity: 0}}
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-full px-4 py-2">
                            <FaHeart className="text-pink-500 text-sm" />
                            <span className="text-sm text-gray-300">Your Mental Wellness Partner</span>
                        </motion.div>

                        <h1 className="font-bold text-gray-200 leading-tight md:text-6xl text-4xl">
                            Embrace <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Wellness</span>,<br />
                            Nurture Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Mind</span>
                        </h1>

                        <p className="text-gray-300 text-lg leading-relaxed">
                            Transform your mental health journey with personalized tools, 
                            expert resources, and a supportive community. Track moods, 
                            journal thoughts, and practice mindfulness—all in one place.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link to={"/chat-with-bot"}>
                                <button className="btn-primary text-base px-8 py-3 rounded-xl shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all inline-flex items-center gap-2 group">
                                    Start Chatting
                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                            <Link to={"/about"}>
                                <button className="px-8 py-3 rounded-xl bg-gray-700/30 hover:bg-gray-700/50 text-gray-200 font-medium border border-gray-600/50 transition-all">
                                    Learn More
                                </button>
                            </Link>
                        </div>

                        {/* Stats */}
                        <motion.div
                            whileInView={{opacity: [0, 1], y: [20, 0]}}
                            transition={{duration: 0.7, delay: 0.5}}
                            initial={{opacity: 0}}
                            className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-700/50">
                            <div>
                                <p className="text-3xl font-bold text-pink-500">10K+</p>
                                <p className="text-sm text-gray-400">Active Users</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-purple-500">50K+</p>
                                <p className="text-sm text-gray-400">Journal Entries</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-blue-500">98%</p>
                                <p className="text-sm text-gray-400">Satisfaction</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Animation */}
                    <motion.div
                        whileInView={{opacity: [0, 1], scale: [0.9, 1]}}
                        transition={{duration: 0.7, delay: 0.3}}
                        initial={{opacity: 0}}
                        className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
                        <Lottie
                            className="relative z-10 object-contain rounded-3xl md:w-full w-full"
                            animationData={animation}
                            loop={true}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
