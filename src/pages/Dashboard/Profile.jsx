import Emotions from "../../components/Emotions/Emotions";
import Chart from "react-apexcharts";
import {useUserContext} from "../../context/AuthProvider";
import {useEffect, useState} from "react";
import {findMood} from "../../utils/findMood";
import {config} from "../../utils/envCongif";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {FaBook, FaSmile, FaChartLine, FaFire} from "react-icons/fa";

const Profile = () => {
    const {user} = useUserContext();
    const [allMoods, setAllMoods] = useState([]);
    const [anxious, setAnxious] = useState([]);
    const [stressed, setStressed] = useState([]);
    const [happy, setHappy] = useState([]);
    const [angry, setAngry] = useState([]);
    const [sad, setSad] = useState([]);
    const [journals, setJournals] = useState([]);

    useEffect(() => {
        fetch(`${config.base_url}/journal/user/${user._id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setJournals(data.data);
            });
    }, [user._id]);

    useEffect(() => {
        if (user) {
            fetch(`${config.base_url}/mood/${user._id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `${localStorage.getItem("accessToken")}`,
                },
            })
                .then((res) => res.json())
                .then((data) => setAllMoods(data?.data));
        }
    }, [user]);

    useEffect(() => {
        setAnxious(findMood(allMoods, "Anxious"));
        setStressed(findMood(allMoods, "Stressed"));
        setHappy(findMood(allMoods, "Happy"));
        setAngry(findMood(allMoods, "Angry"));
        setSad(findMood(allMoods, "Sad"));
    }, [allMoods]);

    return (
        <div>
            {/* Header */}
            <motion.div
                whileInView={{opacity: [0, 1], y: [20, 0]}}
                transition={{duration: 0.5}}
                initial={{opacity: 0}}
                className="mb-8">
                <h1 className="text-4xl font-bold text-gray-200 mb-2">
                    Welcome back, <span>{user?.name}</span>
                </h1>
                <p className="text-gray-400">
                    Here's your mental health overview
                </p>
            </motion.div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
                <motion.div
                    whileInView={{opacity: [0, 1], y: [20, 0]}}
                    transition={{duration: 0.5, delay: 0.1}}
                    initial={{opacity: 0}}
                    className="bg-gradient-to-br from-pink-900/40 to-purple-900/40 rounded-xl p-6 border border-pink-500/30">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-400 text-sm mb-1">
                                Total Moods
                            </p>
                            <p className="text-4xl font-bold text-gray-200">
                                {allMoods?.length || 0}
                            </p>
                        </div>
                        <FaSmile className="text-5xl text-pink-500" />
                    </div>
                </motion.div>

                <motion.div
                    whileInView={{opacity: [0, 1], y: [20, 0]}}
                    transition={{duration: 0.5, delay: 0.2}}
                    initial={{opacity: 0}}
                    className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 rounded-xl p-6 border border-blue-500/30">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-400 text-sm mb-1">
                                Journal Entries
                            </p>
                            <p className="text-4xl font-bold text-gray-200">
                                {journals?.length || 0}
                            </p>
                        </div>
                        <FaBook className="text-5xl text-blue-500" />
                    </div>
                </motion.div>

                <motion.div
                    whileInView={{opacity: [0, 1], y: [20, 0]}}
                    transition={{duration: 0.5, delay: 0.3}}
                    initial={{opacity: 0}}
                    className="bg-gradient-to-br from-orange-900/40 to-red-900/40 rounded-xl p-6 border border-orange-500/30">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-400 text-sm mb-1">
                                Current Streak
                            </p>
                            <p className="text-4xl font-bold text-gray-200">
                                7 days
                            </p>
                        </div>
                        <FaFire className="text-5xl text-orange-500" />
                    </div>
                </motion.div>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8">
                {/* Mood Chart */}
                {allMoods?.length > 0 && (
                    <motion.div
                        whileInView={{opacity: [0, 1], y: [20, 0]}}
                        transition={{duration: 0.5, delay: 0.4}}
                        initial={{opacity: 0}}
                        className="bg-primary/60 rounded-xl p-6 border border-gray-700/50">
                        <h3 className="text-xl font-bold text-gray-200 mb-4 flex items-center gap-2">
                            <FaChartLine className="text-pink-500" />
                            Mood Distribution
                        </h3>
                        <div className="flex justify-center items-center">
                            <Chart
                                options={{
                                    labels: [
                                        "Anxious",
                                        "Stressed",
                                        "Happy",
                                        "Angry",
                                        "Sad",
                                    ],
                                    legend: {
                                        fontSize: "14px",
                                        labels: {
                                            colors: "#f1f1f1",
                                            useSeriesColors: false,
                                        },
                                        horizontalAlign: "center",
                                        position: "bottom",
                                    },
                                    theme: {
                                        mode: "light",
                                        palette: "palette",
                                    },
                                    responsive: [
                                        {
                                            breakpoint: 978,
                                            options: {
                                                chart: {width: 350},
                                                legend: {position: "bottom"},
                                            },
                                        },
                                        {
                                            breakpoint: 480,
                                            options: {
                                                chart: {width: 280},
                                                legend: {position: "bottom"},
                                            },
                                        },
                                    ],
                                }}
                                series={[
                                    anxious?.length,
                                    stressed?.length,
                                    happy?.length,
                                    angry?.length,
                                    sad?.length,
                                ]}
                                type="pie"
                                width="100%"
                                height={320}
                            />
                        </div>
                    </motion.div>
                )}

                {/* Emotions Breakdown */}
                <motion.div
                    whileInView={{opacity: [0, 1], y: [20, 0]}}
                    transition={{duration: 0.5, delay: 0.5}}
                    initial={{opacity: 0}}
                    className="bg-primary/60 rounded-xl p-6 border border-gray-700/50">
                    <h3 className="text-xl font-bold text-gray-200 mb-4">
                        Mood Breakdown
                    </h3>
                    <Emotions
                        stressed={stressed}
                        anxious={anxious}
                        happy={happy}
                        angry={angry}
                        sad={sad}
                    />
                </motion.div>
            </div>

            {/* Journal CTA */}
            <motion.div
                whileInView={{opacity: [0, 1], y: [20, 0]}}
                transition={{duration: 0.5, delay: 0.6}}
                initial={{opacity: 0}}
                className="mt-8 bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-xl p-8 border border-purple-500/30">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-200 mb-2">
                            Continue Your Journey
                        </h3>
                        <p className="text-gray-300">
                            You have {journals?.length || 0} journal entries.
                            Keep tracking your thoughts and emotions.
                        </p>
                    </div>
                    <Link
                        to={"/dashboard/add-journal"}
                        className="btn-primary px-8 py-3 text-lg whitespace-nowrap flex items-center gap-2">
                        <FaBook />
                        Write Journal
                    </Link>
                </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
                whileInView={{opacity: [0, 1], y: [20, 0]}}
                transition={{duration: 0.5, delay: 0.7}}
                initial={{opacity: 0}}
                className="mt-8 grid md:grid-cols-3 gap-4">
                <Link
                    to="/dashboard/statistics"
                    className="bg-primary/60 rounded-xl p-6 border border-gray-700/50 hover:border-pink-500/50 transition-all group">
                    <h4 className="text-lg font-semibold text-pink-400 mb-2 group-hover:text-pink-300">
                        View Statistics
                    </h4>
                    <p className="text-gray-400 text-sm">
                        See your detailed progress and insights
                    </p>
                </Link>
                <Link
                    to="/dashboard/goals"
                    className="bg-primary/60 rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all group">
                    <h4 className="text-lg font-semibold text-purple-400 mb-2 group-hover:text-purple-300">
                        Manage Goals
                    </h4>
                    <p className="text-gray-400 text-sm">
                        Track and complete your wellness goals
                    </p>
                </Link>
                <Link
                    to="/meditations"
                    className="bg-primary/60 rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all group">
                    <h4 className="text-lg font-semibold text-blue-400 mb-2 group-hover:text-blue-300">
                        Try Meditation
                    </h4>
                    <p className="text-gray-400 text-sm">
                        Relax with guided meditation exercises
                    </p>
                </Link>
            </motion.div>
        </div>
    );
};

export default Profile;
