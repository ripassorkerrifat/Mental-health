import {Link, createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Registaion from "../pages/Registation/Registaion";
import LoginPage from "../pages/Login/Login";
import PrivetRouter from "./PrivetRouter";
import BrethingExescisePage from "../pages/BrethingExescisePage/BrethingExescisePage";
import DashboardLayout from "../layout/DashboardLayout";

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
                path: "/breathing-exercises",
                element: (
                    <PrivetRouter>
                        <BrethingExescisePage />
                    </PrivetRouter>
                ),
            },
        ],
    },

    {
        path: "/dashboard",
        element: (
            <PrivetRouter>
                <DashboardLayout />
            </PrivetRouter>
        ),
        children: [
            {
                path: "/dashboard/journaling",
                element: (
                    <div>
                        hello Lorem ipsum <br /> dolor sit <br />
                        amet consectetur adipisicing elit. Laudantium a dicta
                        perferendis <br />
                        non voluptate, amet, expedita atque
                        <br /> praesentium neque placeat, repellendus porro{" "}
                        <br />
                        dita atque
                        <br /> praesentium neque placeat, repellendus porro{" "}
                        <br />
                        aperiam.
                        <br /> Corporis, voluptates. Corporis non amet dolorem
                        nemo
                        <br />. journalist hello Lorem ipsum <br /> dolor sit{" "}
                        <br />
                        or sit <br />
                        amet consectetur adipisicing elit. Laudantium a dicta
                        perferendis <br />
                        non voluptate, amet, expedita atque
                        <br /> praesentium neque placeat, repellendus porro{" "}
                        <br />
                        aperiam.
                        <br /> Corporis, voluptates. Corporis non amet dolorem
                        nemo
                        <br />. journalist
                        <br />. journalist
                    </div>
                ),
            },
            {
                path: "/dashboard/profile",
                element: (
                    <div>
                        hello Lorem ipsum <br /> dolor sit <br />
                        amet consectetur adipisicing elit. Laudantium a dicta
                        perferendis <br />
                        <br /> praesentium neque placeat, repellendus porro{" "}
                        <br />
                        aperiam.
                        <br /> Corporis, voluptates. Corporis non amet dolorem
                        nemo
                        <br />. journalist
                        <br />. journalist
                    </div>
                ),
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
