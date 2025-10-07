import {motion} from "framer-motion";
import {FaPhoneAlt, FaGlobe, FaBook, FaVideo} from "react-icons/fa";
import {MdEmergency} from "react-icons/md";

const Resources = () => {
    const crisisLines = [
        {
            name: "National Suicide Prevention Lifeline",
            phone: "988",
            description: "24/7 crisis support for anyone in suicidal crisis or emotional distress",
            country: "USA",
        },
        {
            name: "Crisis Text Line",
            phone: "Text HOME to 741741",
            description: "Free, 24/7 support for those in crisis",
            country: "USA, Canada, UK",
        },
        {
            name: "SAMHSA National Helpline",
            phone: "1-800-662-4357",
            description: "Treatment referral and information service",
            country: "USA",
        },
        {
            name: "International Association for Suicide Prevention",
            phone: "Visit iasp.info",
            description: "Find crisis centers around the world",
            country: "International",
        },
    ];

    const resources = [
        {
            icon: <FaBook className="text-4xl text-pink-500" />,
            title: "Mental Health Articles",
            description: "Evidence-based articles on various mental health topics",
            links: [
                {name: "Understanding Anxiety", url: "#"},
                {name: "Depression Management", url: "#"},
                {name: "Stress Reduction Techniques", url: "#"},
            ],
        },
        {
            icon: <FaVideo className="text-4xl text-purple-500" />,
            title: "Guided Meditations",
            description: "Video and audio resources for mindfulness practice",
            links: [
                {name: "5-Minute Breathing", url: "/breathing-exercises"},
                {name: "Body Scan Meditation", url: "/meditations"},
                {name: "Sleep Stories", url: "/meditations"},
            ],
        },
        {
            icon: <FaGlobe className="text-4xl text-blue-500" />,
            title: "Online Communities",
            description: "Connect with supportive mental health communities",
            links: [
                {name: "Mental Health Forum", url: "#"},
                {name: "Support Groups", url: "#"},
                {name: "Peer Support Chat", url: "/chat-with-bot"},
            ],
        },
    ];

    const professionalHelp = [
        {
            title: "Find a Therapist",
            description: "Psychology Today, BetterHelp, Talkspace",
        },
        {
            title: "Psychiatrist Directory",
            description: "Find medication management specialists",
        },
        {
            title: "Local Mental Health Services",
            description: "Community mental health centers and clinics",
        },
    ];

    return (
        <div className="py-16">
            <div className="container">
                {/* Hero Section */}
                <motion.div
                    whileInView={{opacity: [0, 1], y: [30, 0]}}
                    transition={{duration: 0.7, delay: 0.2}}
                    initial={{opacity: 0}}
                    className="text-center mb-16">
                    <h1 className="heading mb-6">
                        Mental Health <span>Resources</span>
                    </h1>
                    <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                        Access helpful resources, crisis support, and professional guidance. 
                        You don't have to face challenges alone.
                    </p>
                </motion.div>

                {/* Emergency Section */}
                <motion.div
                    whileInView={{opacity: [0, 1], y: [30, 0]}}
                    transition={{duration: 0.7, delay: 0.3}}
                    initial={{opacity: 0}}
                    className="bg-gradient-to-r from-red-900/40 to-pink-900/40 rounded-2xl p-8 mb-16 border-2 border-red-500/30">
                    <div className="flex items-center justify-center mb-4">
                        <MdEmergency className="text-5xl text-red-400 mr-3" />
                        <h2 className="text-3xl font-bold text-gray-200">
                            Crisis Support
                        </h2>
                    </div>
                    <p className="text-center text-gray-300 mb-6 text-lg">
                        If you're in immediate danger or experiencing a mental health crisis, 
                        please reach out to these resources immediately:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        {crisisLines.map((line, index) => (
                            <div
                                key={index}
                                className="bg-primary/60 rounded-xl p-6 hover:bg-primary transition-all">
                                <div className="flex items-start mb-3">
                                    <FaPhoneAlt className="text-pink-500 text-2xl mr-3 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-200 mb-2">
                                            {line.name}
                                        </h3>
                                        <p className="text-2xl font-bold text-pink-400 mb-2">
                                            {line.phone}
                                        </p>
                                        <p className="text-gray-300 text-sm mb-2">
                                            {line.description}
                                        </p>
                                        <span className="text-xs text-gray-400">
                                            {line.country}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Resources Grid */}
                <div className="mb-16">
                    <motion.h2
                        whileInView={{opacity: [0, 1], y: [20, 0]}}
                        transition={{duration: 0.6}}
                        initial={{opacity: 0}}
                        className="text-3xl font-bold text-gray-200 mb-8 text-center">
                        Helpful <span>Resources</span>
                    </motion.h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {resources.map((resource, index) => (
                            <motion.div
                                key={index}
                                whileInView={{opacity: [0, 1], y: [30, 0]}}
                                transition={{duration: 0.6, delay: index * 0.1}}
                                initial={{opacity: 0}}
                                className="bg-primary rounded-xl p-8 hover:shadow-xl hover:shadow-purple-500/10 transition-all">
                                <div className="flex flex-col items-center text-center">
                                    <div className="mb-4">{resource.icon}</div>
                                    <h3 className="text-2xl font-semibold text-gray-200 mb-3">
                                        {resource.title}
                                    </h3>
                                    <p className="text-gray-300 mb-4">
                                        {resource.description}
                                    </p>
                                    <ul className="space-y-2 w-full">
                                        {resource.links.map((link, idx) => (
                                            <li key={idx}>
                                                <a
                                                    href={link.url}
                                                    className="text-pink-400 hover:text-pink-300 text-sm underline">
                                                    {link.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Professional Help Section */}
                <motion.div
                    whileInView={{opacity: [0, 1], y: [30, 0]}}
                    transition={{duration: 0.7, delay: 0.4}}
                    initial={{opacity: 0}}
                    className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 rounded-2xl p-10">
                    <h2 className="text-3xl font-bold text-gray-200 mb-8 text-center">
                        Professional <span>Help</span>
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {professionalHelp.map((item, index) => (
                            <div
                                key={index}
                                className="bg-primary/60 rounded-xl p-6 text-center">
                                <h3 className="text-xl font-semibold text-pink-400 mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-300 text-sm">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Disclaimer */}
                <motion.div
                    whileInView={{opacity: [0, 1]}}
                    transition={{duration: 0.7, delay: 0.5}}
                    initial={{opacity: 0}}
                    className="mt-12 text-center">
                    <p className="text-gray-400 text-sm max-w-3xl mx-auto">
                        <strong>Disclaimer:</strong> This website provides
                        information and tools for mental health support but is
                        not a substitute for professional medical advice,
                        diagnosis, or treatment. Always seek the advice of
                        qualified health providers with any questions you may
                        have regarding a medical condition.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Resources;
