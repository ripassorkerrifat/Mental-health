import {useState, useEffect} from "react";
import {motion} from "framer-motion";
import {FaPlus, FaCheck, FaTrash, FaFire} from "react-icons/fa";
import toast from "react-hot-toast";
import {config} from "../../utils/envCongif";
import {useUserContext} from "../../context/AuthProvider";

const Goals = () => {
    const {user} = useUserContext();
    const [goals, setGoals] = useState([]);
    const [newGoal, setNewGoal] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchGoals();
    }, []);

    const fetchGoals = async () => {
        try {
            const response = await fetch(
                `${config.base_url}/goals/user/${user._id}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `${localStorage.getItem("accessToken")}`,
                    },
                }
            );
            const data = await response.json();
            if (data.success) {
                setGoals(data.data || []);
            }
        } catch (error) {
            console.error("Error fetching goals:", error);
        }
    };

    const addGoal = async (e) => {
        e.preventDefault();
        if (!newGoal.trim()) return;

        setLoading(true);
        try {
            const response = await fetch(`${config.base_url}/goals`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `${localStorage.getItem("accessToken")}`,
                },
                body: JSON.stringify({
                    userId: user._id,
                    title: newGoal,
                    completed: false,
                }),
            });

            const data = await response.json();
            if (data.success) {
                setGoals([...goals, data.data]);
                setNewGoal("");
                toast.success("Goal added successfully!");
            } else {
                toast.error("Failed to add goal");
            }
        } catch (error) {
            toast.error("Error adding goal");
        } finally {
            setLoading(false);
        }
    };

    const toggleGoal = async (goalId, currentStatus) => {
        try {
            const response = await fetch(`${config.base_url}/goals/${goalId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `${localStorage.getItem("accessToken")}`,
                },
                body: JSON.stringify({completed: !currentStatus}),
            });

            const data = await response.json();
            if (data.success) {
                setGoals(
                    goals.map((goal) =>
                        goal._id === goalId
                            ? {...goal, completed: !currentStatus}
                            : goal
                    )
                );
                toast.success(
                    !currentStatus ? "Goal completed! 🎉" : "Goal unmarked"
                );
            }
        } catch (error) {
            toast.error("Error updating goal");
        }
    };

    const deleteGoal = async (goalId) => {
        try {
            const response = await fetch(`${config.base_url}/goals/${goalId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `${localStorage.getItem("accessToken")}`,
                },
            });

            const data = await response.json();
            if (data.success) {
                setGoals(goals.filter((goal) => goal._id !== goalId));
                toast.success("Goal deleted");
            }
        } catch (error) {
            toast.error("Error deleting goal");
        }
    };

    const completedCount = goals.filter((g) => g.completed).length;
    const totalCount = goals.length;
    const completionRate =
        totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

    return (
        <div>
            <motion.div
                whileInView={{opacity: [0, 1], y: [20, 0]}}
                transition={{duration: 0.5}}
                initial={{opacity: 0}}
                className="mb-8">
                <h1 className="text-4xl font-bold text-gray-200 mb-2">
                    My <span>Goals</span>
                </h1>
                <p className="text-gray-400">
                    Track your daily habits and achieve your wellness goals
                </p>
            </motion.div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
                <motion.div
                    whileInView={{opacity: [0, 1], y: [20, 0]}}
                    transition={{duration: 0.5, delay: 0.1}}
                    initial={{opacity: 0}}
                    className="bg-gradient-to-br from-pink-900/40 to-purple-900/40 rounded-xl p-6 border border-pink-500/30">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-400 text-sm mb-1">
                                Total Goals
                            </p>
                            <p className="text-4xl font-bold text-gray-200">
                                {totalCount}
                            </p>
                        </div>
                        <FaFire className="text-5xl text-pink-500" />
                    </div>
                </motion.div>

                <motion.div
                    whileInView={{opacity: [0, 1], y: [20, 0]}}
                    transition={{duration: 0.5, delay: 0.2}}
                    initial={{opacity: 0}}
                    className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 rounded-xl p-6 border border-green-500/30">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-400 text-sm mb-1">
                                Completed
                            </p>
                            <p className="text-4xl font-bold text-gray-200">
                                {completedCount}
                            </p>
                        </div>
                        <FaCheck className="text-5xl text-green-500" />
                    </div>
                </motion.div>

                <motion.div
                    whileInView={{opacity: [0, 1], y: [20, 0]}}
                    transition={{duration: 0.5, delay: 0.3}}
                    initial={{opacity: 0}}
                    className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 rounded-xl p-6 border border-purple-500/30">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-400 text-sm mb-1">
                                Success Rate
                            </p>
                            <p className="text-4xl font-bold text-gray-200">
                                {completionRate}%
                            </p>
                        </div>
                        <div className="text-5xl">📊</div>
                    </div>
                </motion.div>
            </div>

            {/* Add Goal Form */}
            <motion.div
                whileInView={{opacity: [0, 1], y: [20, 0]}}
                transition={{duration: 0.5, delay: 0.4}}
                initial={{opacity: 0}}
                className="bg-primary/60 rounded-xl p-6 mb-8 border border-gray-700/50">
                <h3 className="text-lg font-semibold text-gray-200 mb-4">
                    Create New Goal
                </h3>
                <form onSubmit={addGoal} className="flex gap-3">
                    <input
                        type="text"
                        value={newGoal}
                        onChange={(e) => setNewGoal(e.target.value)}
                        placeholder="What do you want to achieve?"
                        className="flex-1 px-4 py-3 rounded-lg bg-secondary text-gray-200 border border-gray-700 focus:border-pink-500 focus:outline-none transition-colors"
                    />
                    <button
                        type="submit"
                        disabled={loading || !newGoal.trim()}
                        className="btn-primary px-6 py-3 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                        <FaPlus /> Add Goal
                    </button>
                </form>
            </motion.div>

            {/* Goals List */}
            <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-200 mb-4">
                    Your Goals ({goals.length})
                </h3>
                {goals.length === 0 ? (
                    <motion.div
                        whileInView={{opacity: [0, 1]}}
                        transition={{duration: 0.5}}
                        initial={{opacity: 0}}
                        className="bg-primary/60 rounded-xl p-12 text-center border border-gray-700/50">
                        <div className="text-6xl mb-4">🎯</div>
                        <p className="text-gray-300 text-lg mb-2">
                            No goals yet
                        </p>
                        <p className="text-gray-500">
                            Start by adding your first goal above!
                        </p>
                    </motion.div>
                ) : (
                    goals.map((goal, index) => (
                        <motion.div
                            key={goal._id}
                            whileInView={{opacity: [0, 1], x: [-20, 0]}}
                            transition={{duration: 0.4, delay: index * 0.05}}
                            initial={{opacity: 0}}
                            className={`bg-primary/60 rounded-xl p-5 flex items-center justify-between hover:shadow-lg hover:shadow-pink-500/10 transition-all border ${
                                goal.completed
                                    ? "border-green-500/30 bg-green-900/10"
                                    : "border-gray-700/50"
                            }`}>
                            <div className="flex items-center gap-4 flex-1">
                                <button
                                    onClick={() =>
                                        toggleGoal(goal._id, goal.completed)
                                    }
                                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all hover:scale-110 ${
                                        goal.completed
                                            ? "bg-green-500 border-green-500 shadow-lg shadow-green-500/50"
                                            : "border-gray-500 hover:border-pink-500"
                                    }`}>
                                    {goal.completed && (
                                        <FaCheck className="text-white text-sm" />
                                    )}
                                </button>
                                <p
                                    className={`text-gray-200 text-base ${
                                        goal.completed
                                            ? "line-through text-gray-500"
                                            : ""
                                    }`}>
                                    {goal.title}
                                </p>
                            </div>
                            <button
                                onClick={() => deleteGoal(goal._id)}
                                className="text-red-400 hover:text-red-300 p-2 hover:bg-red-900/20 rounded-lg transition-all">
                                <FaTrash />
                            </button>
                        </motion.div>
                    ))
                )}
            </div>

            {/* Motivational Message */}
            {goals.length > 0 && completedCount > 0 && (
                <motion.div
                    whileInView={{opacity: [0, 1], y: [20, 0]}}
                    transition={{duration: 0.5}}
                    initial={{opacity: 0}}
                    className="mt-8 bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-xl p-8 text-center border border-purple-500/30">
                    <div className="text-5xl mb-3">🎉</div>
                    <p className="text-gray-200 text-xl font-semibold mb-2">
                        Amazing Progress!
                    </p>
                    <p className="text-gray-300">
                        You've completed {completedCount} out of {totalCount} goals. 
                        Keep up the amazing work on your wellness journey!
                    </p>
                </motion.div>
            )}
        </div>
    );
};

export default Goals;
