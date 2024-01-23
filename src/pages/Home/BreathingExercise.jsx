import React, {useEffect, useState} from "react";
import {IoIosArrowForward} from "react-icons/io";
import Container from "../../utils/Container";
import Heading from "../../utils/Heading";
import BreathingDetails from "../../components/BreathingDetails/BreathingDetails";

const BreathingExercise = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentData, setCurrentData] = useState({});
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("exercise.json")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <Container>
            <div>
                <Heading title={"Some Breathing Exercises"} />
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-10">
                {data?.map((d, i) => (
                    <div
                        key={i}
                        className="flex flex-col bg-primary border shadow-sm rounded-lg ">
                        <div className="p-4 md:p-5">
                            <h3 className="text-lg font-bold text-dark">
                                {d?.title}
                            </h3>
                            <p className="text-gray-700 text-base">
                                {d?.desc?.length > 50
                                    ? d?.desc?.slice(0, 50)
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
                    </div>
                ))}
            </div>
            {showModal && (
                <BreathingDetails
                    currentData={currentData}
                    setShowModal={setShowModal}
                    showModal={showModal}
                />
            )}
        </Container>
    );
};

export default BreathingExercise;
