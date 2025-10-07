import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {FaArrowRight, FaRocket} from "react-icons/fa";

const CallToAction = () => {
    return (
        <div className="py-20 relative overflow-hidden">
            <div className="container relative z-10">
                <motion.div
                    whileInView={{opacity: [0, 1], y: [30, 0]}}
                    transition={{duration: 0.7}}
                    initial={{opacity: 0}}
                    className="relative">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 via-purple-600/20 to-blue-600/20 rounded-3xl blur-3xl"></div>
                    
                    {/* Content */}
                    <div className="relative bg-gradient-to-br from-primary to-primary/80 border border-gray-700/50 rounded-3xl p-12 md:p-16 text-center">
                        {/* Icon */}
                        <motion.div
                            whileInView={{scale: [0, 1], rotate: [0, 360]}}
                            transition={{duration: 0.8, delay: 0.2}}
                            initial={{scale: 0}}
                            className="inline-flex p-6 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 mb-8 shadow-lg shadow-pink-500/50">
                            <FaRocket className="text-4xl text-white" />
                        </motion.div>

                        {/* Title */}
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-200 mb-6">
                            Ready to Start Your
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                                Wellness Journey?
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
                            Join thousands of people who are taking control of their mental health. 
                            Start tracking your mood, journaling your thoughts, and building better habits today.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link to={"/registration"}>
                                <button className="btn-primary text-base px-10 py-4 rounded-xl shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all inline-flex items-center gap-2 group">
                                    Get Started Free
                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                            <Link to={"/resources"}>
                                <button className="px-10 py-4 rounded-xl bg-gray-700/30 hover:bg-gray-700/50 text-gray-200 font-medium border border-gray-600/50 transition-all">
                                    View Resources
                                </button>
                            </Link>
                        </div>

                        {/* Trust Badges */}
                        <motion.div
                            whileInView={{opacity: [0, 1]}}
                            transition={{duration: 0.7, delay: 0.4}}
                            initial={{opacity: 0}}
                            className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-gray-700/50">
                            <div className="text-center">
                                <p className="text-2xl font-bold text-pink-500">100%</p>
                                <p className="text-sm text-gray-400">Free Forever</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl font-bold text-purple-500">24/7</p>
                                <p className="text-sm text-gray-400">AI Support</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl font-bold text-blue-500">Private</p>
                                <p className="text-sm text-gray-400">& Secure</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl font-bold text-green-500">10K+</p>
                                <p className="text-sm text-gray-400">Happy Users</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default CallToAction;
