/* eslint-disable react/prop-types */
import {motion} from "framer-motion";
const Heading = ({title, clases}) => {
    return (
        <motion.div
            whileInView={{opacity: [0, 1], x: [-20, 0]}}
            transition={{duration: 0.7, delay: 0}}
            initial={{opacity: 0}}
            className={`md:text-5xl text-3xl mb-6 font-medium capitalize ${clases}`}>
            <span>{title}</span>
        </motion.div>
    );
};

export default Heading;
