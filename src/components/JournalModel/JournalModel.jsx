import {ImCancelCircle} from "react-icons/im";
import {FaTimes} from "react-icons/fa";
import {motion} from "framer-motion";
import TimeAgo from "timeago-react";
import {formattedDate} from "../../utils/formateDateTime";
import {useUserContext} from "../../context/AuthProvider";

const JournalModel = ({showModal, setShowModal, currentJournal}) => {
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
                            <div className="flex-shrink-0 flex items-start justify-between p-6 md:p-8 border-b border-gray-700/50 bg-gradient-to-r from-pink-900/20 to-purple-900/20">
                                <div className="flex-1">
                                    <p className="text-sm text-gray-400 mb-3">
                                        Posted by{" "}
                                        <span className="text-pink-400 font-semibold">
                                            {user?.email === currentJournal.user.email
                                                ? "You"
                                                : currentJournal?.user?.name}
                                        </span>
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <img
                                            className="w-12 h-12 object-cover rounded-full border-2 border-pink-500/50"
                                            src={
                                                currentJournal?.user?.avatar ||
                                                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                                            }
                                            alt={currentJournal?.user?.name}
                                        />
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-200">
                                                {currentJournal?.user?.name}
                                            </h3>
                                            <TimeAgo
                                                className="text-sm text-gray-400"
                                                datetime={formattedDate(currentJournal?.createdAt)}
                                            />
                                        </div>
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
                                <motion.h2
                                    initial={{opacity: 0, x: -20}}
                                    animate={{opacity: 1, x: 0}}
                                    transition={{delay: 0.1}}
                                    className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-6">
                                    {currentJournal.title}
                                </motion.h2>

                                <motion.div
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{delay: 0.2}}
                                    className="text-gray-300 leading-relaxed space-y-3">
                                    {currentJournal?.desc?.split("\n")?.map((line, index) => (
                                        line && (
                                            <p key={index} className="text-base">
                                                {line}
                                            </p>
                                        )
                                    ))}
                                </motion.div>
                            </div>

                            {/* Footer */}
                            <div className="flex-shrink-0 flex items-center justify-end gap-3 p-6 border-t border-gray-700/50 bg-primary/30">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="px-6 py-2.5 rounded-xl bg-gray-700/50 hover:bg-gray-700 text-gray-200 font-medium transition-all">
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

export default JournalModel;
