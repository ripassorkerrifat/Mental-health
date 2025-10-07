import {motion} from "framer-motion";
import {FaHeart, FaBrain, FaUsers, FaShieldAlt} from "react-icons/fa";

const About = () => {
    const features = [
        {
            icon: <FaHeart className="text-5xl text-pink-500" />,
            title: "Compassionate Care",
            description:
                "We believe in treating every individual with empathy, understanding, and respect on their mental health journey.",
        },
        {
            icon: <FaBrain className="text-5xl text-purple-500" />,
            title: "Evidence-Based",
            description:
                "Our tools and resources are grounded in scientific research and proven therapeutic techniques.",
        },
        {
            icon: <FaUsers className="text-5xl text-blue-500" />,
            title: "Community Support",
            description:
                "Connect with others who understand. You're never alone on your path to wellness.",
        },
        {
            icon: <FaShieldAlt className="text-5xl text-green-500" />,
            title: "Privacy First",
            description:
                "Your data and conversations are private and secure. We prioritize your confidentiality.",
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
                        About <span>Mental Health</span>
                    </h1>
                    <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                        We're on a mission to make mental health support
                        accessible, approachable, and effective for everyone.
                        Your well-being matters, and we're here to support you
                        every step of the way.
                    </p>
                </motion.div>

                {/* Mission Statement */}
                <motion.div
                    whileInView={{opacity: [0, 1], y: [30, 0]}}
                    transition={{duration: 0.7, delay: 0.3}}
                    initial={{opacity: 0}}
                    className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-2xl p-10 mb-16">
                    <h2 className="text-3xl font-bold text-gray-200 mb-4 text-center">
                        Our Mission
                    </h2>
                    <p className="text-gray-300 text-lg text-center max-w-4xl mx-auto">
                        To create a safe, supportive digital space where
                        individuals can explore their emotions, track their
                        mental health, and access tools that promote healing,
                        growth, and resilience. We believe that everyone
                        deserves access to quality mental health resources.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            whileInView={{opacity: [0, 1], y: [30, 0]}}
                            transition={{duration: 0.6, delay: index * 0.1}}
                            initial={{opacity: 0}}
                            className="bg-primary rounded-xl p-8 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300">
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-4">{feature.icon}</div>
                                <h3 className="text-2xl font-semibold text-gray-200 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-300">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* What We Offer */}
                <motion.div
                    whileInView={{opacity: [0, 1], y: [30, 0]}}
                    transition={{duration: 0.7, delay: 0.4}}
                    initial={{opacity: 0}}
                    className="bg-primary rounded-2xl p-10">
                    <h2 className="text-3xl font-bold text-gray-200 mb-8 text-center">
                        What We <span>Offer</span>
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <h3 className="text-xl font-semibold text-pink-500 mb-3">
                                Mood Tracking
                            </h3>
                            <p className="text-gray-300">
                                Monitor your emotional patterns and gain
                                insights into your mental health over time.
                            </p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-semibold text-purple-500 mb-3">
                                Guided Exercises
                            </h3>
                            <p className="text-gray-300">
                                Access breathing techniques, meditation, and
                                mindfulness practices.
                            </p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-semibold text-blue-500 mb-3">
                                AI Support
                            </h3>
                            <p className="text-gray-300">
                                Chat with our supportive AI bot for guidance
                                and encouragement anytime.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    whileInView={{opacity: [0, 1], y: [30, 0]}}
                    transition={{duration: 0.7, delay: 0.5}}
                    initial={{opacity: 0}}
                    className="text-center mt-16">
                    <h2 className="text-2xl text-gray-200 mb-4">
                        Ready to start your journey?
                    </h2>
                    <p className="text-gray-300 mb-6">
                        Join thousands who have taken the first step towards
                        better mental health.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
