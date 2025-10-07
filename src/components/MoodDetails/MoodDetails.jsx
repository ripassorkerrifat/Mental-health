import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import Container from "../../utils/Container";
import MoodDetailModals from "../MoodDetailModal/MoodDetailModal";
import Heading from "../../utils/Heading";
import {motion} from "framer-motion";

const MoodDetails = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentData, setCurrentData] = useState(null);
    const [currentGuide, setCurrentGuide] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const {mood} = useParams();

    useEffect(() => {
        setLoading(true);
        fetch("/mood.json")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            });
    }, [mood]);

    useEffect(() => {
        setCurrentData(data?.find((dt) => dt?.mood.toLowerCase() == mood));
    }, [mood, data]);

    if (loading) {
        return;
    }

    return (
        <Container>
            <div className="text-gray-200 py-16">
                {/* Header */}
                <motion.div
                    whileInView={{opacity: [0, 1], y: [30, 0]}}
                    transition={{duration: 0.7}}
                    initial={{opacity: 0}}
                    className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        You're feeling{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                            {currentData?.mood}
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400">
                        Here are some helpful tips to support you
                    </p>
                </motion.div>

                {/* Tips Grid */}
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                    {currentData?.guides?.map((dt, i) => (
                        <motion.div
                            key={i}
                            whileInView={{opacity: [0, 1], y: [30, 0]}}
                            transition={{duration: 0.5, delay: i * 0.1}}
                            initial={{opacity: 0}}
                            onClick={() => {
                                setCurrentGuide(dt);
                                setShowModal(true);
                            }}
                            className="group cursor-pointer">
                            <div className="bg-gradient-to-br from-primary to-primary/80 border border-gray-700/50 rounded-2xl p-6 h-full hover:border-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/10 flex flex-col items-center justify-center text-center">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl mb-4 group-hover:scale-110 transition-transform">
                                    {i + 1}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-200 group-hover:text-blue-400 transition-colors">
                                    {dt.heading}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                    
                    {/* Write Reason Card */}
                    <motion.div
                        whileInView={{opacity: [0, 1], y: [30, 0]}}
                        transition={{duration: 0.5, delay: currentData?.guides?.length * 0.1}}
                        initial={{opacity: 0}}
                        className="group">
                        <Link to={`/write-dow-the-reason-of/${currentData?.mood}`}>
                            <div className="bg-gradient-to-br from-pink-900/40 to-purple-900/40 border border-pink-500/30 rounded-2xl p-6 h-full hover:border-pink-500/50 transition-all hover:shadow-xl hover:shadow-pink-500/10 flex flex-col items-center justify-center text-center">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl mb-4 group-hover:scale-110 transition-transform">
                                    {(currentData?.guides?.length || 0) + 1}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-200 group-hover:text-pink-400 transition-colors">
                                    Write down the reason
                                </h3>
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </div>
            
            {showModal && (
                <MoodDetailModals
                    currentGuide={currentGuide}
                    showModal={showModal}
                    setShowModal={setShowModal}
                />
            )}
        </Container>
    );
};

export default MoodDetails;
