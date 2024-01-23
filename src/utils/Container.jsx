/* eslint-disable react/prop-types */
const Container = ({children}) => {
    return (
        <div className="md:py-16 py-14">
            <div className="container">{children}</div>
        </div>
    );
};

export default Container;
