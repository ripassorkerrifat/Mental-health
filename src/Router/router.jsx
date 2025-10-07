import {Link, createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Registaion from "../pages/Registation/Registaion";
import LoginPage from "../pages/Login/Login";
import PrivetRouter from "./PrivetRouter";
import BrethingExescisePage from "../pages/BrethingExescisePage/BrethingExescisePage";
import DashboardLayout from "../layout/DashboardLayout";
import MoodDetails from "../components/MoodDetails/MoodDetails";
import Profile from "../pages/Dashboard/Profile";
import MyJournals from "../pages/Dashboard/MyJournals";
import AddJournal from "../pages/Dashboard/AddJournal";
import Goals from "../pages/Dashboard/Goals";
import Statistics from "../pages/Dashboard/Statistics";
import Journals from "../pages/Journals/Journals";
import Chat from "../pages/Chat/Chat";
import Meditations from "../pages/Meditations/Meditations";
import MoodReason from "../pages/MoodReason/MoodReason";
import MyWritenMood from "../pages/Dashboard/MyWritenMood";
import About from "../pages/About/About";
import Resources from "../pages/Resources/Resources";
import Contact from "../pages/Contact/Contact";
import Privacy from "../pages/Privacy/Privacy";
import Terms from "../pages/Terms/Terms";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: (
            <div className="flex items-center justify-center mt-60 text-gray-200">
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
            {
                path: "/meditations",
                element: (
                    <PrivetRouter>
                        <Meditations />
                    </PrivetRouter>
                ),
            },
            {
                path: "/journals",
                element: (
                    <PrivetRouter>
                        <Journals />
                    </PrivetRouter>
                ),
            },
            {
                path: "/write-dow-the-reason-of/:mood",
                element: (
                    <PrivetRouter>
                        <MoodReason />
                    </PrivetRouter>
                ),
            },
            {
                path: "/chat-with-bot",
                element: (
                    <PrivetRouter>
                        <Chat />
                    </PrivetRouter>
                ),
            },
            {
                path: "/feeling/:mood",
                element: (
                    <PrivetRouter>
                        <MoodDetails />
                    </PrivetRouter>
                ),
            },
            {
                path: "/about",
                element: (
                    <PrivetRouter>
                        <About />
                    </PrivetRouter>
                ),
            },
            {
                path: "/resources",
                element: (
                    <PrivetRouter>
                        <Resources />
                    </PrivetRouter>
                ),
            },
            {
                path: "/contact",
                element: (
                    <PrivetRouter>
                        <Contact />
                    </PrivetRouter>
                ),
            },
            {
                path: "/privacy",
                element: <Privacy />,
            },
            {
                path: "/terms",
                element: <Terms />,
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
                    <PrivetRouter>
                        <MyJournals />
                    </PrivetRouter>
                ),
            },
            {
                path: "/dashboard/add-journal",
                element: (
                    <PrivetRouter>
                        <AddJournal />
                    </PrivetRouter>
                ),
            },
            {
                path: "/dashboard/profile",
                element: (
                    <PrivetRouter>
                        <Profile />
                    </PrivetRouter>
                ),
            },
            {
                path: "/dashboard/my-write-mood",
                element: (
                    <PrivetRouter>
                        <MyWritenMood />
                    </PrivetRouter>
                ),
            },
            {
                path: "/dashboard/goals",
                element: (
                    <PrivetRouter>
                        <Goals />
                    </PrivetRouter>
                ),
            },
            {
                path: "/dashboard/statistics",
                element: (
                    <PrivetRouter>
                        <Statistics />
                    </PrivetRouter>
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
