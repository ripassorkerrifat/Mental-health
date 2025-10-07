import React, {useState} from "react";
import {motion} from "framer-motion";
import {FaLeaf, FaPlay} from "react-icons/fa";

const Meditations = () => {
    const [activeVideo, setActiveVideo] = useState(null);

    const meditationSteps = [
        {
            title: "Prepare Your Space",
            description:
                "Find a quiet and peaceful place where you can sit comfortably.",
            icon: "🧘",
        },
        {
            title: "Set a Time Limit",
            description:
                "Start with a short duration, like five or ten minutes, especially if you're new to meditation.",
            icon: "⏱️",
        },
        {
            title: "Get Comfortable",
            description:
                "Sit in a chair with your feet grounded, or adopt a relaxed cross-legged position.",
            icon: "🪑",
        },
        {
            title: "Focus on Your Breath",
            description:
                "Pay attention to the sensation of your breath as it enters and exits your body.",
            icon: "💨",
        },
        {
            title: "Acknowledge Distractions",
            description:
                "When your mind wanders, gently guide your focus back to your breath.",
            icon: "🎯",
        },
        {
            title: "Practice Compassion",
            description:
                "Avoid self-judgment. Be gentle with yourself and simply return to the breath.",
            icon: "❤️",
        },
    ];

    const meditationVideos = [
        {
            title: "Mindfulness Meditation",
            url: "https://www.youtube.com/embed/YFSc7Ck0Ao0",
            duration: "10 min",
            category: "Beginner",
        },
        {
            title: "Body Scan Meditation",
            url: "https://www.youtube.com/embed/0zrOqOKUbx0",
            duration: "15 min",
            category: "Intermediate",
        },
        {
            title: "Loving-Kindness Meditation",
            url: "https://www.youtube.com/embed/TdSgBB1dqNk",
            duration: "12 min",
            category: "All Levels",
        },
        {
            title: "Walking Meditation",
            url: "https://www.youtube.com/embed/aCwEwz1xU2M",
            duration: "8 min",
            category: "Beginner",
        },
        {
            title: "Sound Meditation",
            url: "https://www.youtube.com/embed/hlwhmltvG1Y",
            duration: "20 min",
            category: "Advanced",
        },
        {
            title: "Visualization Meditation",
            url: "https://www.youtube.com/embed/invL2KEt15Q",
            duration: "15 min",
            category: "Intermediate",
        },
    ];

    return (
        <div className="container text-gray-200 !py-16">
            {/* Hero Section */}
            <motion.div
                whileInView={{opacity: [0, 1], y: [30, 0]}}
                transition={{duration: 0.7}}
                initial={{opacity: 0}}
                className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-6 py-2 mb-6">
                    <FaLeaf className="text-green-500" />
                    <span className="text-sm">
                        Mindfulness & Meditation Guide
                    </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    Learn to{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                        Meditate
                    </span>
                </h1>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Discover inner peace and reduce stress through guided
                    meditation practices. Lower your stress levels, improve
                    focus, and become kinder to yourself.
                </p>
            </motion.div>

            {/* What is Meditation Section */}
            <motion.div
                whileInView={{opacity: [0, 1], y: [30, 0]}}
                transition={{duration: 0.6}}
                initial={{opacity: 0}}
                className="bg-gradient-to-br from-primary to-primary/80 border border-gray-700/50 rounded-3xl p-8 md:p-12 mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
                        What is Meditation?
                    </span>
                </h2>

                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                    <span className="text-4xl text-pink-500 font-bold">M</span>
                    editation is a practice of mindfulness—focusing the mind on
                    a particular object, thought, or activity to train attention
                    and awareness, achieving a mentally clear and emotionally
                    calm state.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-primary/60 border border-blue-500/30 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-blue-400 mb-3">
                            Why Meditate?
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            Meditation gives you calm, peace, and balance that
                            benefits your emotional well-being and overall
                            health. It helps you relax, cope with stress, stay
                            centered, and maintain inner peace.
                        </p>
                    </div>

                    <div className="bg-primary/60 border border-cyan-500/30 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-cyan-400 mb-3">
                            Best Time to Meditate
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            Although beneficial at any time, many find morning
                            meditation most effective as it's typically the part
                            of the day with the least distractions.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* How to Meditate Section */}
            <motion.div
                whileInView={{opacity: [0, 1], y: [30, 0]}}
                transition={{duration: 0.6}}
                initial={{opacity: 0}}
                className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                        How to Meditate?
                    </span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {meditationSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            whileInView={{opacity: [0, 1], y: [30, 0]}}
                            transition={{duration: 0.5, delay: index * 0.1}}
                            initial={{opacity: 0}}
                            className="bg-gradient-to-br from-primary to-primary/80 border border-gray-700/50 rounded-2xl p-6 hover:border-pink-500/30 transition-all hover:shadow-xl hover:shadow-pink-500/10">
                            <div className="text-5xl mb-4">{step.icon}</div>
                            <h3 className="text-xl font-bold text-gray-200 mb-3">
                                {step.title}
                            </h3>
                            <p className="text-gray-400">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Meditation Videos Section */}
            <motion.div
                whileInView={{opacity: [0, 1], y: [30, 0]}}
                transition={{duration: 0.6}}
                initial={{opacity: 0}}
                className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                        Guided Meditation Videos
                    </span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {meditationVideos.map((video, index) => (
                        <motion.div
                            key={index}
                            whileInView={{opacity: [0, 1], y: [30, 0]}}
                            transition={{duration: 0.5, delay: index * 0.1}}
                            initial={{opacity: 0}}
                            className="bg-gradient-to-br from-primary to-primary/80 border border-gray-700/50 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all hover:shadow-xl hover:shadow-purple-500/10 group">
                            <div className="relative aspect-video bg-gray-900">
                                {activeVideo === index ? (
                                    <iframe
                                        className="w-full h-full"
                                        src={video.url}
                                        title={video.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                                ) : (
                                    <div
                                        onClick={() => setActiveVideo(index)}
                                        className="w-full h-full flex items-center justify-center cursor-pointer bg-gradient-to-br from-purple-900/40 to-pink-900/40 group-hover:from-purple-900/60 group-hover:to-pink-900/60 transition-all">
                                        <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <FaPlay className="text-white text-2xl ml-1" />
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
                                        {video.category}
                                    </span>
                                    <span className="text-xs text-gray-400">
                                        {video.duration}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-200">
                                    {video.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Benefits Section */}
            <motion.div
                whileInView={{opacity: [0, 1], y: [30, 0]}}
                transition={{duration: 0.6}}
                initial={{opacity: 0}}
                className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-3xl p-8 md:p-12 border border-purple-500/30">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                    Benefits of Regular Meditation
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center">
                        <div className="text-5xl mb-3">🧠</div>
                        <h3 className="text-lg font-semibold text-pink-400 mb-2">
                            Reduces Stress
                        </h3>
                        <p className="text-sm text-gray-400">
                            Lower cortisol levels and feel more relaxed
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl mb-3">💪</div>
                        <h3 className="text-lg font-semibold text-purple-400 mb-2">
                            Improves Focus
                        </h3>
                        <p className="text-sm text-gray-400">
                            Enhance concentration and mental clarity
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl mb-3">😊</div>
                        <h3 className="text-lg font-semibold text-blue-400 mb-2">
                            Boosts Mood
                        </h3>
                        <p className="text-sm text-gray-400">
                            Increase positive emotions and happiness
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl mb-3">😴</div>
                        <h3 className="text-lg font-semibold text-green-400 mb-2">
                            Better Sleep
                        </h3>
                        <p className="text-sm text-gray-400">
                            Improve sleep quality and fall asleep easier
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Meditations;
