import {motion} from "framer-motion";

const StatsCard = ({icon, title, value, color, delay = 0}) => {
    const colorClasses = {
        pink: "from-pink-900/40 to-purple-900/40 border-pink-500/30",
        blue: "from-blue-900/40 to-cyan-900/40 border-blue-500/30",
        green: "from-green-900/40 to-emerald-900/40 border-green-500/30",
        purple: "from-purple-900/40 to-pink-900/40 border-purple-500/30",
        orange: "from-orange-900/40 to-red-900/40 border-orange-500/30",
    };

    return (
        <motion.div
            whileInView={{opacity: [0, 1], y: [20, 0]}}
            transition={{duration: 0.5, delay}}
            initial={{opacity: 0}}
            className={`bg-gradient-to-br ${
                colorClasses[color] || colorClasses.pink
            } border rounded-xl p-6 hover:shadow-xl hover:shadow-${color}-500/10 transition-all`}>
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-gray-400 text-sm mb-2">{title}</p>
                    <p className="text-4xl font-bold text-gray-200">{value}</p>
                </div>
                <div className="text-5xl">{icon}</div>
            </div>
        </motion.div>
    );
};

export default StatsCard;
