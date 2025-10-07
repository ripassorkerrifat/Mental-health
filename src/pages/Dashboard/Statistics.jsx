import {useState, useEffect} from "react";
import {motion} from "framer-motion";
import {useUserContext} from "../../context/AuthProvider";
import {config} from "../../utils/envCongif";
import StatsCard from "../../components/StatsCard/StatsCard";
import {
    FaSmile,
    FaBook,
    FaFire,
    FaChartLine,
    FaBullseye,
    FaHeart,
} from "react-icons/fa";

const Statistics = () => {
    const {user} = useUserContext();
    const [stats, setStats] = useState({
        totalMoods: 0,
        totalJournals: 0,
        totalGoals: 0,
        completedGoals: 0,
        currentStreak: 7,
        avgMoodScore: 0,
    });

    useEffect(() => {
        fetchStatistics();
    }, []);

    const fetchStatistics = async () => {
        try {
            // Fetch moods
            const moodsRes = await fetch(
                `${config.base_url}/mood/${user._id}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `${localStorage.getItem("accessToken")}`,
                    },
                }
            );
            const moodsData = await moodsRes.json();

            // Fetch journals
            const journalsRes = await fetch(
                `${config.base_url}/journal/user/${user._id}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `${localStorage.getItem("accessToken")}`,
                    },
                }
            );
            const journalsData = await journalsRes.json();

            // Update stats
            setStats({
                totalMoods: moodsData?.data?.length || 0,
                totalJournals: journalsData?.data?.length || 0,
                totalGoals: 0, // Will be populated when goals API is available
                completedGoals: 0,
                currentStreak: 7,
                avgMoodScore: 4.2,
            });
        } catch (error) {
            console.error("Error fetching statistics:", error);
        }
    };

    return (
        <div className="pb-10">
            <motion.div
                whileInView={{opacity: [0, 1], y: [20, 0]}}
                transition={{duration: 0.5}}
                initial={{opacity: 0}}
                className="mb-8">
                <h1 className="text-4xl font-bold text-gray-200 mb-2">
                    Your <span>Statistics</span>
                </h1>
                <p className="text-gray-400">
                    Track your mental health journey and progress
                </p>
            </motion.div>

            {/* Main Stats Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
                <StatsCard
                    icon={<FaSmile className="text-pink-500" />}
                    title="Total Mood Entries"
                    value={stats.totalMoods}
                    color="pink"
                    delay={0.1}
                />
                <StatsCard
                    icon={<FaBook className="text-blue-500" />}
                    title="Journal Entries"
                    value={stats.totalJournals}
                    color="blue"
                    delay={0.2}
                />
                <StatsCard
                    icon={<FaFire className="text-orange-500" />}
                    title="Current Streak"
                    value={`${stats.currentStreak} days`}
                    color="orange"
                    delay={0.3}
                />
            </div>

            {/* Secondary Stats Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
                <StatsCard
                    icon={<FaBullseye className="text-purple-500" />}
                    title="Active Goals"
                    value={stats.totalGoals}
                    color="purple"
                    delay={0.4}
                />
                <StatsCard
                    icon={<FaChartLine className="text-green-500" />}
                    title="Goals Completed"
                    value={stats.completedGoals}
                    color="green"
                    delay={0.5}
                />
                <StatsCard
                    icon={<FaHeart className="text-pink-500" />}
                    title="Avg Mood Score"
                    value={stats.avgMoodScore.toFixed(1)}
                    color="pink"
                    delay={0.6}
                />
            </div>

            {/* Insights Section */}
            <motion.div
                whileInView={{opacity: [0, 1], y: [20, 0]}}
                transition={{duration: 0.6, delay: 0.7}}
                initial={{opacity: 0}}
                className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-200 mb-6">
                    Weekly <span>Insights</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-primary/60 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-pink-400 mb-3">
                            🎯 Progress This Week
                        </h3>
                        <p className="text-gray-300">
                            You've logged {stats.totalMoods > 0 ? "your moods" : "mood entries"} and written{" "}
                            {stats.totalJournals} journal{stats.totalJournals !== 1 ? "s" : ""}. 
                            Keep up the great work!
                        </p>
                    </div>
                    <div className="bg-primary/60 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-purple-400 mb-3">
                            💡 Recommendation
                        </h3>
                        <p className="text-gray-300">
                            Try practicing meditation or breathing exercises to
                            maintain your emotional balance and reduce stress.
                        </p>
                    </div>
                    <div className="bg-primary/60 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-blue-400 mb-3">
                            📈 Growth Areas
                        </h3>
                        <p className="text-gray-300">
                            Consider setting more specific goals to track your
                            progress and celebrate small wins along the way.
                        </p>
                    </div>
                    <div className="bg-primary/60 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-green-400 mb-3">
                            ✨ Achievement
                        </h3>
                        <p className="text-gray-300">
                            You're building healthy habits! Consistency is key
                            to lasting mental wellness.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Motivational Quote */}
            <motion.div
                whileInView={{opacity: [0, 1], y: [20, 0]}}
                transition={{duration: 0.6, delay: 0.8}}
                initial={{opacity: 0}}
                className="mt-8 bg-primary rounded-xl p-8 text-center">
                <p className="text-2xl text-gray-200 italic mb-2">
                    "Your mental health is a priority. Your happiness is
                    essential. Your self-care is a necessity."
                </p>
                <p className="text-gray-400">- Anonymous</p>
            </motion.div>
        </div>
    );
};

export default Statistics;
