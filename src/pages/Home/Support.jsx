/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import Container from "../../utils/Container";
import support from "../../assets/support.json";
import Heading from "../../utils/Heading";
import {MdEmail} from "react-icons/md";
import {IoCall} from "react-icons/io5";

const Support = () => {
    return (
        <Container>
            <div className=" grid md:grid-cols-2 md:-mt-20">
                <div className=" md:grid place-content-center">
                    <div className="flex flex-col md:mr-4 desc text-lg">
                        <div>
                            <Heading title={"Get community support"} />
                        </div>

                        <p className="mb-3 ">
                            "Find solace and strength in our Mental Health
                            Community. Here, support is a heartbeat away. Share,
                            listen, and thrive together on the journey to
                            wellbeing. Your voice matters, and so does your
                            mental health. Join us today."
                        </p>
                        <div>
                            <div>
                                <p className="inline-flex items-center">
                                    <IoCall size={20} />
                                    <span className="ml-2">
                                        +880 1744876681
                                    </span>
                                </p>
                            </div>
                            <p className="inline-flex items-center">
                                <MdEmail size={20} />
                                <span className="ml-2">
                                    ripassorkerrifat@gmail.com
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex -z-40 items-center  justify-center md:p-6 md:mt-8 md:mr-8 ">
                    <Lottie
                        className="object-contain rounded-lg  md:w-[540px]  w-full"
                        animationData={support}
                        loop={true}
                    />
                </div>
            </div>
        </Container>
    );
};

export default Support;
