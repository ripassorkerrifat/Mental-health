import {motion} from "framer-motion";
import {FaBrain, FaBook, FaChartLine, FaComments, FaHeart, FaBullseye} from "react-icons/fa";

const Features = () => {
    const features = [
        {
            icon: <FaBrain className="text-4xl" />,
            title: "Mood Tracking",
            description: "Monitor your emotional patterns and gain insights into your mental health journey over time.",
            color: "from-pink-500 to-rose-500",
            delay: 0.1,
        },
        {
            icon: <FaBook className="text-4xl" />,
            title: "Digital Journaling",
            description: "Express your thoughts and feelings in a safe, private space. Reflect and grow with every entry.",
            color: "from-purple-500 to-indigo-500",
            delay: 0.2,
        },
        {
            icon: <FaChartLine className="text-4xl" />,
            title: "Progress Analytics",
            description: "Visualize your mental health journey with detailed statistics and meaningful insights.",
            color: "from-blue-500 to-cyan-500",
            delay: 0.3,
        },
        {
            icon: <FaComments className="text-4xl" />,
            title: "AI Chat Support",
            description: "Get instant support and guidance from our compassionate AI assistant, available 24/7.",
            color: "from-green-500 to-emerald-500",
            delay: 0.4,
        },
        {
            icon: <FaHeart className="text-4xl" />,
            title: "Guided Meditations",
            description: "Access a library of meditation exercises designed to reduce stress and promote relaxation.",
            color: "from-orange-500 to-amber-500",
            delay: 0.5,
        },
        {
            icon: <FaBullseye className="text-4xl" />,
            title: "Goal Setting",
            description: "Set personal wellness goals and track your progress towards a healthier, happier you.",
            color: "from-violet-500 to-purple-500",
            delay: 0.6,
        },
    ];

    return (
        <div className="py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>
            
            <div className="container relative z-10">
                {/* Section Header */}
                <motion.div
                    whileInView={{opacity: [0, 1], y: [30, 0]}}
                    transition={{duration: 0.7}}
                    initial={{opacity: 0}}
                    className="text-center mb-16">
                    <span className="text-pink-500 font-semibold text-sm uppercase tracking-wider">
                        Features
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-200 mt-3 mb-4">
                        Everything You Need for <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Mental Wellness</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Comprehensive tools and resources designed to support your mental health journey
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            whileInView={{opacity: [0, 1], y: [30, 0]}}
                            transition={{duration: 0.6, delay: feature.delay}}
                            initial={{opacity: 0}}
                            className="group relative">
                            {/* Card */}
                            <div className="bg-primary/50 border border-gray-700/50 rounded-2xl p-8 h-full hover:border-pink-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/10">
                                {/* Icon */}
                                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} bg-opacity-20 mb-6 group-hover:scale-110 transition-transform`}>
                                    <div className={`text-transparent bg-clip-text bg-gradient-to-r ${feature.color}`}>
                                        {feature.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-gray-200 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>

                                {/* Hover Effect Line */}
                                <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${feature.color} rounded-b-2xl`}></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
