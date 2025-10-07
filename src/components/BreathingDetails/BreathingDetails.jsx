import {FaTimes, FaWind} from "react-icons/fa";
import {motion} from "framer-motion";

export default function BreathingDetails({
    currentData,
    showModal,
    setShowModal,
}) {
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
                        className="relative w-full max-w-4xl max-h-[80vh] flex">
                        <div className="bg-gradient-to-br from-primary to-primary/80 border border-gray-700/50 rounded-3xl shadow-2xl flex flex-col w-full max-h-[80vh]">
                            {/* Header */}
                            <div className="flex-shrink-0 flex items-center justify-between p-6 md:p-8 border-b border-gray-700/50 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
                                <div className="flex items-center gap-3 flex-1 min-w-0">
                                    <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
                                        <FaWind className="text-2xl text-cyan-400" />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 truncate">
                                        {currentData.title}
                                    </h3>
                                </div>
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="flex-shrink-0 p-2 rounded-lg hover:bg-gray-700/50 transition-colors ml-4">
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
                                    {/* Introduction */}
                                    <div className="bg-primary/60 border border-gray-700/50 rounded-2xl p-5">
                                        <h4 className="font-bold text-cyan-400 mb-3 text-lg flex items-center gap-2">
                                            <span className="text-2xl">📖</span>
                                            Introduction
                                        </h4>
                                        <p className="text-gray-300 leading-relaxed">
                                            {currentData?.desc}
                                        </p>
                                    </div>

                                    {/* Steps */}
                                    <div className="space-y-4">
                                        <h4 className="font-bold text-cyan-400 text-lg flex items-center gap-2">
                                            <span className="text-2xl">📋</span>
                                            Steps to Follow
                                        </h4>
                                        {currentData?.preoces?.map((s, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{opacity: 0, x: -20}}
                                                animate={{opacity: 1, x: 0}}
                                                transition={{delay: 0.2 + i * 0.1}}
                                                className="bg-primary/60 border border-gray-700/50 rounded-2xl p-5 hover:border-cyan-500/30 transition-all">
                                                <div className="flex gap-3">
                                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                                                        {i + 1}
                                                    </span>
                                                    <div className="flex-1">
                                                        <h5 className="font-bold text-cyan-400 mb-2">
                                                            {s.step}
                                                        </h5>
                                                        <p className="text-gray-300 leading-relaxed">
                                                            {s.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>

                            {/* Footer */}
                            <div className="flex-shrink-0 flex items-center justify-end gap-3 p-6 border-t border-gray-700/50 bg-primary/30">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold transition-all shadow-lg hover:shadow-cyan-500/50">
                                    Got it!
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </>
    );
}
