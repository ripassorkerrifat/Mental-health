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
        <div className="">
            <Container>
                <div>
                    <Heading title={"Some Breathing Exercises"} />
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-10">
                    {pathname === "/breathing-exercises" ? (
                        <>
                            {" "}
                            {data?.map((d, i) => (
                                <motion.div
                                    whileInView={{opacity: [0, 1], x: [-20, 0]}}
                                    transition={{duration: 0.7, delay: d.deley}}
                                    key={i}
                                    className="flex flex-col items-center justify-center text-center bg-primary border shadow-sm rounded-lg md:p-0 p-4">
                                    <div className="p-4 md:p-5">
                                        <h3 className="text-lg font-bold text-dark">
                                            {d?.title}
                                        </h3>
                                        <p className="text-gray-700 text-base">
                                            {d?.desc?.length > 100
                                                ? `${d?.desc?.slice(0, 100)}...`
                                                : desc}
                                        </p>
                                        <div className="mt-2  text-base font-semibold rounded-lg ">
                                            <button
                                                onClick={() => {
                                                    setShowModal(true);
                                                    setCurrentData(d);
                                                }}
                                                type="submit"
                                                className="inline-flex items-center gap-x-1">
                                                <span> Read more</span>
                                                <IoIosArrowForward size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </>
                    ) : (
                        <>
                            {data?.slice(0, 8)?.map((d, i) => (
                                <motion.div
                                    key={i}
                                    whileInView={{opacity: [0, 1], x: [-20, 0]}}
                                    transition={{duration: 0.7, delay: d.deley}}
                                    className="flex flex-col items-center justify-center text-center bg-primary border shadow-sm rounded-lg md:p-0 p-4">
                                    <div className="p-4 md:p-5">
                                        <h3 className="text-lg font-bold text-dark">
                                            {d?.title}
                                        </h3>
                                        <p className="text-gray-700 text-base">
                                            {d?.desc?.length > 100
                                                ? `${d?.desc?.slice(0, 100)}...`
                                                : desc}
                                        </p>
                                        <div className="mt-2  text-base font-semibold rounded-lg ">
                                            <button
                                                onClick={() => {
                                                    setShowModal(true);
                                                    setCurrentData(d);
                                                }}
                                                type="submit"
                                                className="inline-flex items-center gap-x-1">
                                                <span> Read more</span>
                                                <IoIosArrowForward size={16} />
                                            </button>
                                        </div>
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
            </Container>
        </div>
    );
};

export default BreathingExercise;
