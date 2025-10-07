import {motion} from "framer-motion";
import {FaShieldAlt, FaLock, FaUserSecret, FaDatabase} from "react-icons/fa";

const Privacy = () => {
    return (
        <div className="py-16">
            <div className="container max-w-5xl">
                <motion.div
                    whileInView={{opacity: [0, 1], y: [30, 0]}}
                    transition={{duration: 0.7, delay: 0.2}}
                    initial={{opacity: 0}}
                    className="text-center mb-12">
                    <h1 className="heading mb-6">
                        Privacy <span>Policy</span>
                    </h1>
                    <p className="text-gray-400">
                        Last updated: October 8, 2025
                    </p>
                </motion.div>

                {/* Key Points */}
                <div className="grid md:grid-cols-4 gap-6 mb-12">
                    <motion.div
                        whileInView={{opacity: [0, 1], y: [20, 0]}}
                        transition={{duration: 0.5, delay: 0.1}}
                        initial={{opacity: 0}}
                        className="bg-primary rounded-xl p-6 text-center">
                        <FaShieldAlt className="text-4xl text-pink-500 mx-auto mb-3" />
                        <p className="text-gray-300 text-sm">
                            Your data is protected
                        </p>
                    </motion.div>
                    <motion.div
                        whileInView={{opacity: [0, 1], y: [20, 0]}}
                        transition={{duration: 0.5, delay: 0.2}}
                        initial={{opacity: 0}}
                        className="bg-primary rounded-xl p-6 text-center">
                        <FaLock className="text-4xl text-purple-500 mx-auto mb-3" />
                        <p className="text-gray-300 text-sm">
                            Encrypted storage
                        </p>
                    </motion.div>
                    <motion.div
                        whileInView={{opacity: [0, 1], y: [20, 0]}}
                        transition={{duration: 0.5, delay: 0.3}}
                        initial={{opacity: 0}}
                        className="bg-primary rounded-xl p-6 text-center">
                        <FaUserSecret className="text-4xl text-blue-500 mx-auto mb-3" />
                        <p className="text-gray-300 text-sm">
                            Never shared
                        </p>
                    </motion.div>
                    <motion.div
                        whileInView={{opacity: [0, 1], y: [20, 0]}}
                        transition={{duration: 0.5, delay: 0.4}}
                        initial={{opacity: 0}}
                        className="bg-primary rounded-xl p-6 text-center">
                        <FaDatabase className="text-4xl text-green-500 mx-auto mb-3" />
                        <p className="text-gray-300 text-sm">
                            You own your data
                        </p>
                    </motion.div>
                </div>

                {/* Content */}
                <motion.div
                    whileInView={{opacity: [0, 1], y: [20, 0]}}
                    transition={{duration: 0.6}}
                    initial={{opacity: 0}}
                    className="bg-primary rounded-2xl p-8 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-pink-500 mb-4">
                            1. Information We Collect
                        </h2>
                        <div className="text-gray-300 space-y-3">
                            <p>
                                <strong className="text-gray-200">
                                    Account Information:
                                </strong>{" "}
                                We collect your name, email address, and profile
                                picture when you create an account.
                            </p>
                            <p>
                                <strong className="text-gray-200">
                                    Mental Health Data:
                                </strong>{" "}
                                Your mood entries, journal entries, exercise
                                completions, and chat conversations are stored
                                securely.
                            </p>
                            <p>
                                <strong className="text-gray-200">
                                    Usage Data:
                                </strong>{" "}
                                We collect information about how you interact
                                with our platform to improve our services.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-pink-500 mb-4">
                            2. How We Use Your Information
                        </h2>
                        <ul className="text-gray-300 space-y-2 list-disc list-inside">
                            <li>
                                To provide and maintain our mental health
                                services
                            </li>
                            <li>
                                To personalize your experience and track your
                                progress
                            </li>
                            <li>To send you notifications and updates</li>
                            <li>
                                To improve our platform and develop new features
                            </li>
                            <li>To ensure security and prevent fraud</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-pink-500 mb-4">
                            3. Data Security
                        </h2>
                        <p className="text-gray-300">
                            We implement industry-standard security measures to
                            protect your personal information. All sensitive
                            data is encrypted both in transit and at rest. Your
                            mental health information is treated with the
                            highest level of confidentiality.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-pink-500 mb-4">
                            4. Data Sharing
                        </h2>
                        <p className="text-gray-300 mb-3">
                            We do not sell or share your personal information
                            with third parties. Your data may only be disclosed:
                        </p>
                        <ul className="text-gray-300 space-y-2 list-disc list-inside">
                            <li>With your explicit consent</li>
                            <li>
                                To comply with legal obligations or court orders
                            </li>
                            <li>
                                To protect the safety and rights of users or the
                                public
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-pink-500 mb-4">
                            5. Your Rights
                        </h2>
                        <p className="text-gray-300 mb-3">You have the right to:</p>
                        <ul className="text-gray-300 space-y-2 list-disc list-inside">
                            <li>Access your personal data</li>
                            <li>Correct inaccurate information</li>
                            <li>Delete your account and associated data</li>
                            <li>Export your data in a portable format</li>
                            <li>Opt out of non-essential communications</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-pink-500 mb-4">
                            6. Cookies and Tracking
                        </h2>
                        <p className="text-gray-300">
                            We use cookies and similar technologies to enhance
                            your experience, analyze usage patterns, and
                            maintain your session. You can control cookie
                            preferences through your browser settings.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-pink-500 mb-4">
                            7. Children's Privacy
                        </h2>
                        <p className="text-gray-300">
                            Our service is not intended for users under the age
                            of 13. We do not knowingly collect personal
                            information from children. If you believe we have
                            collected data from a child, please contact us
                            immediately.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-pink-500 mb-4">
                            8. Changes to This Policy
                        </h2>
                        <p className="text-gray-300">
                            We may update this Privacy Policy from time to time.
                            We will notify you of any changes by posting the new
                            policy on this page and updating the "Last updated"
                            date.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-pink-500 mb-4">
                            9. Contact Us
                        </h2>
                        <p className="text-gray-300">
                            If you have questions about this Privacy Policy or
                            our data practices, please contact us at:
                            <br />
                            <strong className="text-gray-200">
                                Email: privacy@mentalhealth.com
                            </strong>
                        </p>
                    </section>
                </motion.div>
            </div>
        </div>
    );
};

export default Privacy;
