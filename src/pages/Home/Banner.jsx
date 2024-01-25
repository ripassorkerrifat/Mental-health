/* eslint-disable react/no-unescaped-entities */
import animation from "../../assets/Animation.json";
import Lottie from "lottie-react";
import {motion} from "framer-motion";

const Banner = () => {
    return (
        <div className=" md:-mt-10 ">
            <div className="container grid md:grid-cols-2 md:gap-x-10 sm:py-12 ">
                <motion.div
                    whileInView={{opacity: [0, 1], y: [0, -20]}}
                    transition={{duration: 0.7, delay: 0.3}}
                    className="flex -z-40 items-center md:-ml-10 justify-center md:p-6 md:mt-8 md:mr-8 ">
                    <Lottie
                        className="object-contain rounded-lg  md:w-[480px]  w-full"
                        animationData={animation}
                        loop={true}
                    />
                </motion.div>
                <motion.div
                    whileInView={{opacity: [0, 1], y: [0, -20]}}
                    transition={{duration: 0.7, delay: 0.3}}
                    className=" md:mt-16 mt-14 md:grid place-content-center">
                    <div className="flex flex-col md:mr-4">
                        <h2 className="font-bold leading-none md:text-5xl text-3xl">
                            Embrace <span>Wellness</span>, <br />{" "}
                            <span>Nurture</span> Your Mind
                        </h2>

                        <p className="my-3 mb-6 desc text-lg ">
                            {" "}
                            In our website, we're dedicated to uplifting your
                            mental well-being. Explore a space that encourages
                            self-discovery, resilience, and growth. Unleash the
                            potential within you, foster a positive mindset, and
                            find solace in a community that understands.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;
