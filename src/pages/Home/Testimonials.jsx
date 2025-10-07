import {motion} from "framer-motion";
import {FaStar, FaQuoteLeft} from "react-icons/fa";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Marketing Professional",
            image: "https://i.pravatar.cc/150?img=1",
            rating: 5,
            text: "This platform has been a game-changer for my mental health. The mood tracking feature helps me identify patterns I never noticed before. Highly recommended!",
            delay: 0.1,
        },
        {
            name: "Michael Chen",
            role: "Software Developer",
            image: "https://i.pravatar.cc/150?img=13",
            rating: 5,
            text: "The AI chat support is incredibly helpful. It's like having a therapist available 24/7. The journaling feature has also helped me process my thoughts better.",
            delay: 0.2,
        },
        {
            name: "Emma Williams",
            role: "Teacher",
            image: "https://i.pravatar.cc/150?img=5",
            rating: 5,
            text: "I love how easy it is to track my progress. The meditation exercises are perfect for my busy schedule, and I've noticed a significant improvement in my stress levels.",
            delay: 0.3,
        },
    ];

    return (
        <div className="py-20 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent"></div>
            
            <div className="container relative z-10">
                {/* Section Header */}
                <motion.div
                    whileInView={{opacity: [0, 1], y: [30, 0]}}
                    transition={{duration: 0.7}}
                    initial={{opacity: 0}}
                    className="text-center mb-16">
                    <span className="text-purple-500 font-semibold text-sm uppercase tracking-wider">
                        Testimonials
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-200 mt-3 mb-4">
                        What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Community</span> Says
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Real stories from people who've transformed their mental health journey
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            whileInView={{opacity: [0, 1], y: [30, 0]}}
                            transition={{duration: 0.6, delay: testimonial.delay}}
                            initial={{opacity: 0}}
                            className="group">
                            <div className="bg-gradient-to-br from-primary to-primary/80 border border-gray-700/50 rounded-2xl p-8 h-full hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 relative">
                                {/* Quote Icon */}
                                <div className="absolute top-6 right-6 text-pink-500/20">
                                    <FaQuoteLeft className="text-4xl" />
                                </div>

                                {/* Rating */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FaStar key={i} className="text-yellow-500 text-sm" />
                                    ))}
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-gray-300 leading-relaxed mb-6 relative z-10">
                                    "{testimonial.text}"
                                </p>

                                {/* Author Info */}
                                <div className="flex items-center gap-4 pt-6 border-t border-gray-700/50">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full border-2 border-pink-500/50"
                                    />
                                    <div>
                                        <h4 className="text-gray-200 font-semibold">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-gray-400 text-sm">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
