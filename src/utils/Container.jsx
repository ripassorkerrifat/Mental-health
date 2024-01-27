/* eslint-disable react/prop-types */
const Container = ({children}) => {
    return (
        <div className="my-12 md:my-20">
            <div className="container">{children}</div>
        </div>
    );
};

export default Container;
