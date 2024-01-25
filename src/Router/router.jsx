import {Link, createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Registaion from "../pages/Registation/Registaion";
import LoginPage from "../pages/Login/Login";
import PrivetRouter from "./PrivetRouter";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: (
            <div className="flex items-center justify-center mt-60">
                <div>
                    <h2 className="text-4xl"> 404 Not found this page.</h2>
                    <Link
                        to={"/"}
                        className="underline text-center block text-xl">
                        Go to home.
                    </Link>
                </div>
            </div>
        ),
        children: [
            {
                path: "/",
                element: (
                    <PrivetRouter>
                        <Home />
                    </PrivetRouter>
                ),
            },
            {
                path: "/about",
                element: <About />,
            },
        ],
    },
    {
        path: "login",
        element: <LoginPage />,
    },
    {
        path: "registration",
        element: <Registaion />,
    },
]);
