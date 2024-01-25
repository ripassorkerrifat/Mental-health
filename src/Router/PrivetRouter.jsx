import React from "react";
import {Navigate} from "react-router-dom";

import Loading from "../utils/Loading";
import {useUserContext} from "../context/AuthProvider";

const PrivetRouter = ({children}) => {
    const {user, loading} = useUserContext();

    if (loading && !user) {
        return <Loading />;
    }
    if (!user) {
        return <Navigate to={"/login"}></Navigate>;
    }

    return children;
};

export default PrivetRouter;
