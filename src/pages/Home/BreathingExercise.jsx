import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {IoIosArrowForward} from "react-icons/io";
import Container from "../../utils/Container";
import Heading from "../../utils/Heading";
import BreathingDetails from "../../components/BreathingDetails/BreathingDetails";
import {Link, useLocation} from "react-router-dom";
import {FaArrowCircleRight} from "react-icons/fa";
import Loading from "../../utils/Loading";

const BreathingExercise = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentData, setCurrentData] = useState({});
    const [data, setData] = useState([]);
    const [loading, setloading] = useState(true);

    const pathname = useLocation().pathname;

    useEffect(() => {
        setloading(true);
        fetch("exercise.json")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setloading(false);
            });
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className={`${pathname == "/" && " bg-primary"} py-20`}>
            <div className="container">
                <motion.div
                    whileInView={{opacity: [0, 1], y: [30, 0]}}
                    transition={{duration: 0.7}}
                    initial={{opacity: 0}}
                    className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-200 mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
                            Breathing
                        </span>{" "}
                        Exercises
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Practice mindful breathing to reduce stress and find calm
                    </p>
                </motion.div>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                    {pathname === "/breathing-exercises" ? (
                        <>
                            {" "}
                            {data?.map((d, i) => (
                                <motion.div
                                    whileInView={{opacity: [0, 1], y: [30, 0]}}
                                    transition={{duration: 0.5, delay: i * 0.05}}
                                    initial={{opacity: 0}}
                                    key={i}
                                    className="group cursor-pointer">
                                    <div className="bg-gradient-to-br from-primary to-primary/80 border border-gray-700/50 rounded-2xl p-6 h-full hover:border-cyan-500/30 transition-all hover:shadow-xl hover:shadow-cyan-500/10">
                                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-cyan-500/30 group-hover:scale-110 transition-transform">
                                            <span className="text-3xl">💨</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-200 mb-3 text-center group-hover:text-cyan-400 transition-colors">
                                            {d?.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm text-center leading-relaxed mb-4">
                                            {d?.desc?.length > 100
                                                ? `${d?.desc?.slice(0, 100)}...`
                                                : d?.desc}
                                        </p>
                                        <button
                                            onClick={() => {
                                                setShowModal(true);
                                                setCurrentData(d);
                                            }}
                                            type="button"
                                            className="w-full inline-flex items-center justify-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors group-hover:gap-3">
                                            Learn More
                                            <IoIosArrowForward size={18} />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </>
                    ) : (
                        <>
                            {data?.slice(0, 8)?.map((d, i) => (
                                <motion.div
                                    key={i}
                                    whileInView={{opacity: [0, 1], y: [30, 0]}}
                                    transition={{duration: 0.5, delay: i * 0.05}}
                                    initial={{opacity: 0}}
                                    className="group cursor-pointer">
                                    <div className="bg-gradient-to-br from-secondary to-secondary/80 border border-gray-700/50 rounded-2xl p-6 h-full hover:border-cyan-500/30 transition-all hover:shadow-xl hover:shadow-cyan-500/10">
                                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-cyan-500/30 group-hover:scale-110 transition-transform">
                                            <span className="text-3xl">💨</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-200 mb-3 text-center group-hover:text-cyan-400 transition-colors">
                                            {d?.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm text-center leading-relaxed mb-4">
                                            {d?.desc?.length > 100
                                                ? `${d?.desc?.slice(0, 100)}...`
                                                : d?.desc}
                                        </p>
                                        <button
                                            onClick={() => {
                                                setShowModal(true);
                                                setCurrentData(d);
                                            }}
                                            type="button"
                                            className="w-full inline-flex items-center justify-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors group-hover:gap-3">
                                            Learn More
                                            <IoIosArrowForward size={18} />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </>
                    )}
                </div>
                {pathname === "/" && (
                    <div className=" flex justify-end mt-8">
                        <div className="group">
                            <Link
                                to={"/breathing-exercises"}
                                className="btn-primary inline-flex items-center ">
                                See all{" "}
                                <FaArrowCircleRight
                                    size={15}
                                    className="ml-2 group-hover:ml-4 duration-300"
                                />
                            </Link>
                        </div>
                    </div>
                )}
                {showModal && (
                    <BreathingDetails
                        currentData={currentData}
                        setShowModal={setShowModal}
                        showModal={showModal}
                    />
                )}
            </div>
        </div>
    );
};

export default BreathingExercise;
