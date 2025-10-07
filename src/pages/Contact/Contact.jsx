import {useState} from "react";
import {motion} from "framer-motion";
import {FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane} from "react-icons/fa";
import toast from "react-hot-toast";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            toast.success("Message sent! We'll get back to you within 1-2 business days.");
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
            setIsSubmitting(false);
        }, 1000);
    };

    const contactInfo = [
        {
            icon: <FaEnvelope className="text-4xl text-pink-500" />,
            title: "Email Us",
            content: "support@mentalhealth.com",
            description: "We respond within 24-48 hours",
        },
        {
            icon: <FaPhone className="text-4xl text-purple-500" />,
            title: "Call Us",
            content: "1-800-MENTAL-HELP",
            description: "Mon-Fri, 9AM-6PM EST",
        },
        {
            icon: <FaMapMarkerAlt className="text-4xl text-blue-500" />,
            title: "Visit Us",
            content: "123 Wellness Street, Suite 100",
            description: "New York, NY 10001",
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
                        Get In <span>Touch</span>
                    </h1>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Have questions or need support? We're here to help. 
                        Reach out to us and we'll respond as soon as possible.
                    </p>
                </motion.div>

                {/* Contact Info Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {contactInfo.map((info, index) => (
                        <motion.div
                            key={index}
                            whileInView={{opacity: [0, 1], y: [30, 0]}}
                            transition={{duration: 0.6, delay: index * 0.1}}
                            initial={{opacity: 0}}
                            className="bg-primary rounded-xl p-8 text-center hover:shadow-xl hover:shadow-pink-500/10 transition-all">
                            <div className="flex justify-center mb-4">
                                {info.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-200 mb-2">
                                {info.title}
                            </h3>
                            <p className="text-pink-400 font-semibold mb-2">
                                {info.content}
                            </p>
                            <p className="text-gray-400 text-sm">
                                {info.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Contact Form */}
                <motion.div
                    whileInView={{opacity: [0, 1], y: [30, 0]}}
                    transition={{duration: 0.7, delay: 0.4}}
                    initial={{opacity: 0}}
                    className="max-w-3xl mx-auto">
                    <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 md:p-12 shadow-2xl">
                        <h2 className="text-3xl font-bold text-gray-200 mb-6 text-center">
                            Send Us a <span>Message</span>
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-gray-300 mb-2 font-medium">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-secondary text-gray-200 border border-gray-700 focus:border-pink-500 focus:outline-none transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-gray-300 mb-2 font-medium">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-secondary text-gray-200 border border-gray-700 focus:border-pink-500 focus:outline-none transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-gray-300 mb-2 font-medium">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-secondary text-gray-200 border border-gray-700 focus:border-pink-500 focus:outline-none transition-colors"
                                    placeholder="How can we help you?"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-gray-300 mb-2 font-medium">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    className="w-full px-4 py-3 rounded-lg bg-secondary text-gray-200 border border-gray-700 focus:border-pink-500 focus:outline-none transition-colors resize-none"
                                    placeholder="Tell us more about your inquiry..."></textarea>
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn-primary px-8 py-3 text-lg inline-flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed">
                                    {isSubmitting ? (
                                        <>
                                            <svg
                                                className="animate-spin h-5 w-5 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24">
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </motion.div>

                {/* FAQ Section */}
                <motion.div
                    whileInView={{opacity: [0, 1], y: [30, 0]}}
                    transition={{duration: 0.7, delay: 0.5}}
                    initial={{opacity: 0}}
                    className="mt-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-200 mb-8 text-center">
                        Frequently Asked <span>Questions</span>
                    </h2>
                    <div className="space-y-4">
                        <div className="bg-primary rounded-xl p-6">
                            <h3 className="text-xl font-semibold text-pink-400 mb-2">
                                Is this service confidential?
                            </h3>
                            <p className="text-gray-300">
                                Yes, all your data is encrypted and kept strictly confidential. 
                                We follow industry-standard security practices to protect your information.
                            </p>
                        </div>
                        <div className="bg-primary rounded-xl p-6">
                            <h3 className="text-xl font-semibold text-pink-400 mb-2">
                                How quickly can I expect a response?
                            </h3>
                            <p className="text-gray-300">
                                We typically respond within 24-48 hours during business days. 
                                For urgent matters, please use our crisis resources.
                            </p>
                        </div>
                        <div className="bg-primary rounded-xl p-6">
                            <h3 className="text-xl font-semibold text-pink-400 mb-2">
                                Do you offer professional therapy?
                            </h3>
                            <p className="text-gray-300">
                                We provide self-help tools and resources. For professional therapy, 
                                please check our Resources page for referrals to licensed therapists.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
