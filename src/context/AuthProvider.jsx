import React, {createContext, useContext, useEffect, useState} from "react";
import {getUserInfoFromToken} from "../utils/getUserInfoFromToken";
import {config} from "../utils/envCongif";
import Loading from "../utils/Loading";

export const UserContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState("");

    // On initial mount, load token from localStorage
    useEffect(() => {
        const storedToken = localStorage.getItem("accessToken");
        if (storedToken) {
            setToken(storedToken);
        } else {
            setLoading(false);
        }
    }, []);

    // Whenever token changes, validate it and fetch user data
    useEffect(() => {
        const validateToken = async () => {
            // If no token, clear user and stop loading
            if (!token) {
                setUser(null);
                setLoading(false);
                return;
            }

            setLoading(true);

            try {
                // Decode token to check if it's valid
                const decodedInfo = getUserInfoFromToken(token);
                
                if (!decodedInfo || !decodedInfo.id) {
                    throw new Error("Invalid token structure");
                }

                // Fetch user data with the token
                const response = await fetch(`${config.base_url}/user/${decodedInfo.id}`, {
                    headers: {
                        Authorization: `${token}`,
                    },
                });

                const data = await response.json();

                // Check for various error conditions
                if (
                    !response.ok || 
                    data?.message === "jwt expired" || 
                    data?.message === "jwt malformed" ||
                    data?.message === "invalid token" ||
                    !data?.success
                ) {
                    // Token is invalid or expired
                    localStorage.removeItem("accessToken");
                    setToken("");
                    setUser(null);
                } else {
                    // Token is valid
                    setUser(data.data);
                }
            } catch (error) {
                // Handle any errors (invalid token format, network errors, etc.)
                console.error("Token validation error:", error);
                localStorage.removeItem("accessToken");
                setToken("");
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        validateToken();
    }, [token]);

    if (loading) {
        return <Loading />;
    }

    const logout = () => {
        localStorage.removeItem("accessToken");
        setToken("");
        setUser(null);
    };

    const authInfo = {user, setUser, loading, setLoading, token, setToken, logout};
    return (
        <UserContext.Provider value={authInfo}>{children}</UserContext.Provider>
    );
};

export const useUserContext = () => useContext(UserContext);
