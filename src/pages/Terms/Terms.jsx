import {motion} from "framer-motion";
import {FaFileContract, FaCheckCircle} from "react-icons/fa";

const Terms = () => {
    return (
        <div className="py-16">
            <div className="container max-w-5xl">
                <motion.div
                    whileInView={{opacity: [0, 1], y: [30, 0]}}
                    transition={{duration: 0.7, delay: 0.2}}
                    initial={{opacity: 0}}
                    className="text-center mb-12">
                    <FaFileContract className="text-6xl text-pink-500 mx-auto mb-4" />
                    <h1 className="heading mb-6">
                        Terms & <span>Conditions</span>
                    </h1>
                    <p className="text-gray-400">
                        Last updated: October 8, 2025
                    </p>
                </motion.div>

                <motion.div
                    whileInView={{opacity: [0, 1], y: [20, 0]}}
                    transition={{duration: 0.6}}
                    initial={{opacity: 0}}
                    className="bg-primary rounded-2xl p-8 space-y-8">
                    <div className="bg-gradient-to-r from-pink-900/40 to-purple-900/40 rounded-xl p-6 mb-6">
                        <p className="text-gray-300 text-center">
                            By accessing and using Mental Health platform, you
                            agree to be bound by these Terms and Conditions.
                            Please read them carefully.
                        </p>
                    </div>

                    <section>
                        <h2 className="text-2xl font-bold text-pink-500 mb-4 flex items-center gap-2">
                            <FaCheckCircle /> 1. Acceptance of Terms
                        </h2>
                        <p className="text-gray-300">
                            By creating an account and using our services, you
                            acknowledge that you have read, understood, and
                            agree to be bound by these Terms and Conditions, as
                            well as our Privacy Policy. If you do not agree,
                            please do not use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-pink-500 mb-4 flex items-center gap-2">
                            <FaCheckCircle /> 2. Use of Services
                        </h2>
                        <div className="text-gray-300 space-y-3">
                            <p>
                                <strong className="text-gray-200">
                                    Eligibility:
                                </strong>{" "}
                                You must be at least 13 years old to use our
                                services. Users under 18 should have parental
                                consent.
                            </p>
                            <p>
                                <strong className="text-gray-200">
                                    Account Security:
                                </strong>{" "}
                                You are responsible for maintaining the
                                confidentiality of your account credentials and
                                for all activities under your account.
                            </p>
                            <p>
                                <strong className="text-gray-200">
                                    Acceptable Use:
                                </strong>{" "}
                                You agree to use our platform only for lawful
                                purposes and in a way that does not infringe on
                                the rights of others.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-pink-500 mb-4 flex items-center gap-2">
                            <FaCheckCircle /> 3. Medical Disclaimer
                        </h2>
                        <div className="text-gray-300 space-y-3 bg-red-900/20 p-6 rounded-xl border border-red-500/30">
                            <p className="font-semibold text-gray-200">
                                IMPORTANT: This platform is NOT a substitute for
                                professional medical advice, diagnosis, or
                                treatment.
                            </p>
                            <ul className="space-y-2 list-disc list-inside">
                                <li>
                                    Our tools are designed for self-help and
                                    wellness support
                                </li>
                                <li>
                                    We do not provide medical or therapeutic
                                    services
                                </li>
                                <li>
                                    Always seek advice from qualified healthcare
                                    professionals
                                </li>
                                <li>
                                    In case of emergency, call 911 or your local
                                    emergency services
                                </li>
                                <li>
                                    For crisis support, contact the National
                                    Suicide Prevention Lifeline: 988
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-pink-500 mb-4 flex items-center gap-2">
                            <FaCheckCircle /> 4. User Content
                        </h2>
                        <div className="text-gray-300 space-y-3">
                            <p>
                                <strong className="text-gray-200">
                                    Ownership:
                                </strong>{" "}
                                You retain ownership of all content you create
                                (journals, mood entries, etc.).
                            </p>
                            <p>
                                <strong className="text-gray-200">
                                    License:
                                </strong>{" "}
                                By posting content, you grant us a license to
                                store and display it for providing our services.
                            </p>
                            <p>
                                <strong className="text-gray-200">
                                    Prohibited Content:
                                </strong>{" "}
                                You may not post content that is illegal,
                                harmful, threatening, abusive, or violates
                                others' rights.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-pink-500 mb-4 flex items-center gap-2">
                            <FaCheckCircle /> 5. Intellectual Property
                        </h2>
                        <p className="text-gray-300">
                            All content, features, and functionality of our
                            platform (including but not limited to design,
                            graphics, text, and software) are owned by Mental
                            Health and are protected by copyright, trademark,
                            and other intellectual property laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-pink-500 mb-4 flex items-center gap-2">
                            <FaCheckCircle /> 6. Limitation of Liability
                        </h2>
                        <div className="text-gray-300 space-y-3">
                            <p>
                                To the fullest extent permitted by law, Mental
                                Health shall not be liable for:
                            </p>
                            <ul className="space-y-2 list-disc list-inside">
                                <li>
                                    Any indirect, incidental, or consequential
                                    damages
                                </li>
                                <li>
                                    Loss of data, profits, or business
                                    opportunities
                                </li>
                                <li>
                                    Damages arising from your use or inability
                                    to use our services
                                </li>
                                <li>
                                    Any reliance on information provided through
                                    our platform
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-pink-500 mb-4 flex items-center gap-2">
                            <FaCheckCircle /> 7. Service Availability
                        </h2>
                        <p className="text-gray-300">
                            We strive to maintain service availability but do
                            not guarantee uninterrupted access. We reserve the
                            right to modify, suspend, or discontinue services at
                            any time without notice.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-pink-500 mb-4 flex items-center gap-2">
                            <FaCheckCircle /> 8. Termination
                        </h2>
                        <p className="text-gray-300">
                            We reserve the right to terminate or suspend your
                            account at our discretion, without notice, for
                            conduct that violates these Terms or is harmful to
                            other users, us, or third parties.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-pink-500 mb-4 flex items-center gap-2">
                            <FaCheckCircle /> 9. Governing Law
                        </h2>
                        <p className="text-gray-300">
                            These Terms shall be governed by and construed in
                            accordance with the laws of the United States,
                            without regard to its conflict of law provisions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-pink-500 mb-4 flex items-center gap-2">
                            <FaCheckCircle /> 10. Changes to Terms
                        </h2>
                        <p className="text-gray-300">
                            We reserve the right to modify these Terms at any
                            time. We will notify users of any material changes.
                            Your continued use of our services after changes
                            constitutes acceptance of the new Terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-pink-500 mb-4 flex items-center gap-2">
                            <FaCheckCircle /> 11. Contact Information
                        </h2>
                        <p className="text-gray-300">
                            For questions about these Terms, please contact us
                            at:
                            <br />
                            <strong className="text-gray-200">
                                Email: legal@mentalhealth.com
                            </strong>
                        </p>
                    </section>

                    <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-xl p-6 mt-8">
                        <p className="text-gray-300 text-center text-sm">
                            By using Mental Health services, you acknowledge
                            that you have read and understood these Terms and
                            Conditions and agree to be bound by them.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Terms;
