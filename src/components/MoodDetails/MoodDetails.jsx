import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
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
            <div className="text-dark">
                <div>
                    <Heading title={`You are feeling ${currentData?.mood}.`} />
                    <motion.h3
                        whileInView={{opacity: [0, 1], x: [-20, 0]}}
                        transition={{duration: 0.7, delay: 0}}
                        className="text-dark text-xl mt-2">
                        Here are some tips for you.
                    </motion.h3>
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-10 mt-8">
                        {currentData?.guides?.map((dt, i) => (
                            <motion.div
                                key={i}
                                onClick={() => {
                                    setCurrentGuide(dt);
                                    setShowModal(true);
                                }}
                                whileInView={{opacity: [0, 1], y: [0, -20]}}
                                transition={{duration: 0.7, delay: 0.4}}
                                className="bg-blue-200 rounded-md p-6 text-center flex justify-center items-center">
                                <h2 className=" text-lg font-semibold">
                                    <b>{i + 1}</b> {".  "} {dt.heading}
                                </h2>
                            </motion.div>
                        ))}
                    </div>
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
