import {FaTimes, FaHeart} from "react-icons/fa";
import {motion} from "framer-motion";
import TimeAgo from "timeago-react";
import {formattedDate} from "../../utils/formateDateTime";
import {useUserContext} from "../../context/AuthProvider";

const WritenModal = ({showModal, setShowModal, data}) => {
    const {user} = useUserContext();
    return (
        <>
            {showModal && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        onClick={() => setShowModal(false)}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{opacity: 0, scale: 0.95, y: 20}}
                        animate={{opacity: 1, scale: 1, y: 0}}
                        exit={{opacity: 0, scale: 0.95, y: 20}}
                        transition={{duration: 0.3}}
                        className="relative w-full max-w-3xl max-h-[80vh] flex">
                        <div className="bg-gradient-to-br from-primary to-primary/80 border border-gray-700/50 rounded-3xl shadow-2xl flex flex-col w-full max-h-[80vh]">
                            {/* Header */}
                            <div className="flex-shrink-0 flex items-center justify-between p-6 md:p-8 border-b border-gray-700/50 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
                                <div className="flex items-center gap-4">
                                    <img
                                        className="w-12 h-12 object-cover rounded-full border-2 border-purple-500/50"
                                        src={
                                            user?.avatar ||
                                            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                                        }
                                        alt={user?.name}
                                    />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-200">
                                            {user?.name}
                                        </h3>
                                        <p className="text-sm text-gray-400">
                                            Your mood journal
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="flex-shrink-0 p-2 rounded-lg hover:bg-gray-700/50 transition-colors">
                                    <FaTimes className="text-gray-400 hover:text-gray-200 text-xl" />
                                </button>
                            </div>

                            {/* Body - Scrollable */}
                            <div className="overflow-y-auto flex-1 p-6 md:p-8">
                                <motion.div
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{delay: 0.1}}
                                    className="space-y-6">
                                    {/* Title Section */}
                                    <div className="text-center mb-6">
                                        <p className="text-gray-400 text-sm mb-2">
                                            <TimeAgo
                                                datetime={formattedDate(
                                                    data?.createdAt
                                                )}
                                            />
                                        </p>
                                        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                                            You were feeling {data.mood}
                                        </h2>
                                    </div>

                                    {/* Step Cards */}
                                    <div className="bg-primary/60 border border-gray-700/50 rounded-2xl p-5">
                                        <h3 className="font-bold text-purple-400 mb-3 text-lg">
                                            1. You were feeling {data.mood}{" "}
                                            because
                                        </h3>
                                        <div className="space-y-2">
                                            {data?.stepFirst?.map((s, i) => (
                                                <p
                                                    key={i}
                                                    className="text-gray-300 leading-relaxed">
                                                    <span className="font-semibold text-purple-300">
                                                        {s.title}:
                                                    </span>{" "}
                                                    {s.desc}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="bg-primary/60 border border-gray-700/50 rounded-2xl p-5">
                                        <h3 className="font-bold text-purple-400 mb-3 text-lg">
                                            2. How these stressors were
                                            affecting me
                                        </h3>
                                        <div className="space-y-2">
                                            {data?.stepSecond?.map((s, i) => (
                                                <p
                                                    key={i}
                                                    className="text-gray-300 leading-relaxed">
                                                    <span className="font-semibold text-purple-300">
                                                        {s.title}:
                                                    </span>{" "}
                                                    {s.desc}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="bg-primary/60 border border-gray-700/50 rounded-2xl p-5">
                                        <h3 className="font-bold text-purple-400 mb-3 text-lg">
                                            3. My emotions at the moment
                                        </h3>
                                        <div className="space-y-2">
                                            {data?.stepThird?.map((s, i) => (
                                                <p
                                                    key={i}
                                                    className="text-gray-300 leading-relaxed">
                                                    <span className="font-semibold text-purple-300">
                                                        {s.title}:
                                                    </span>{" "}
                                                    {s.desc}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="bg-primary/60 border border-gray-700/50 rounded-2xl p-5">
                                        <h3 className="font-bold text-purple-400 mb-3 text-lg">
                                            4. Positive aspects and coping
                                            strategies
                                        </h3>
                                        <div className="space-y-2">
                                            {data?.stepFourth?.map((s, i) => (
                                                <p
                                                    key={i}
                                                    className="text-gray-300 leading-relaxed">
                                                    <span className="font-semibold text-purple-300">
                                                        {s.title}:
                                                    </span>{" "}
                                                    {s.desc}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="bg-primary/60 border border-gray-700/50 rounded-2xl p-5">
                                        <h3 className="font-bold text-purple-400 mb-3 text-lg">
                                            5. Actions I could take to alleviate
                                            stress
                                        </h3>
                                        <div className="space-y-2">
                                            {data?.stepFifth?.map((s, i) => (
                                                <p
                                                    key={i}
                                                    className="text-gray-300 leading-relaxed">
                                                    <span className="font-semibold text-purple-300">
                                                        {s.title}:
                                                    </span>{" "}
                                                    {s.desc}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="bg-primary/60 border border-gray-700/50 rounded-2xl p-5">
                                        <h3 className="font-bold text-purple-400 mb-3 text-lg">
                                            6. Affirmations for self-compassion
                                        </h3>
                                        <div className="space-y-2">
                                            {data?.stepSixth?.map((s, i) => (
                                                <p
                                                    key={i}
                                                    className="text-gray-300 leading-relaxed">
                                                    <span className="font-semibold text-purple-300">
                                                        {s.title}:
                                                    </span>{" "}
                                                    {s.desc}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="bg-primary/60 border border-gray-700/50 rounded-2xl p-5">
                                        <h3 className="font-bold text-purple-400 mb-3 text-lg">
                                            7. Gratitude
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            {data?.stepSeventh[0].title}
                                        </p>
                                    </div>
                                    <div className="bg-primary/60 border border-gray-700/50 rounded-2xl p-5">
                                        <h3 className="font-bold text-purple-400 mb-3 text-lg">
                                            8. Closing Thoughts
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            {data?.stepEighth[0].title}
                                        </p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Footer */}
                            <div className="flex-shrink-0 flex items-center justify-end gap-3 p-6 border-t border-gray-700/50 bg-primary/30">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold transition-all shadow-lg hover:shadow-purple-500/50">
                                    Close
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </>
    );
};

export default WritenModal;
