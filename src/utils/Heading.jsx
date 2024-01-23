/* eslint-disable react/prop-types */
const Heading = ({title, clases}) => {
    return (
        <div
            className={`md:text-5xl text-3xl mb-6 font-medium capitalize ${clases}`}>
            <span>{title}</span>
        </div>
    );
};

export default Heading;
