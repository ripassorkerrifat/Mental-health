import React, {useEffect, useState} from "react";
import {config} from "../../utils/envCongif";
import TimeAgo from "timeago-react";
import {formattedDate} from "../../utils/formateDateTime";
import {IoIosArrowForward} from "react-icons/io";
import {FaBook, FaSearch, FaPlus} from "react-icons/fa";
import {motion} from "framer-motion";
import JournalModel from "../../components/JournalModel/JournalModel";
import Loading from "../../utils/Loading";
import {Link} from "react-router-dom";

const Journals = () => {
    const [journals, setJournals] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [currentJournal, setCurrentJournal] = useState({});
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        setLoading(true);
        fetch(`${config.base_url}/journal`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setJournals(data.data);
                setLoading(false);
            });
    }, []);

    const filteredJournals = journals?.filter((jn) =>
        jn.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="container min-h-[70vh] py-16">
            {/* Header Section */}
            <motion.div
                whileInView={{opacity: [0, 1], y: [30, 0]}}
                transition={{duration: 0.7}}
                initial={{opacity: 0}}
                className="mb-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-200 mb-2">
                            Community{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                                Journals
                            </span>
                        </h1>
                        <p className="text-gray-400 text-lg">
                            Explore inspiring stories and thoughts from our
                            community
                        </p>
                    </div>
                    <Link to="/dashboard/add-journal">
                        <button className="btn-primary px-6 py-3 rounded-xl shadow-lg hover:shadow-pink-500/50 transition-all inline-flex items-center gap-2">
                            <FaPlus /> Write Journal
                        </button>
                    </Link>
                </div>

                {/* Search Bar */}
                <div className="mt-8 relative max-w-xl">
                    <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search journals by title..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-primary border border-gray-700 focus:border-pink-500 focus:outline-none text-gray-200 transition-colors"
                    />
                </div>
            </motion.div>

            {/* Journals Grid */}
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                {filteredJournals?.length ? (
                    filteredJournals?.map((jn, i) => (
                        <motion.div
                            whileInView={{opacity: [0, 1], y: [30, 0]}}
                            transition={{duration: 0.5, delay: i * 0.05}}
                            initial={{opacity: 0}}
                            key={i}
                            className="group">
                            <div className="bg-gradient-to-br from-primary to-primary/80 border border-gray-700/50 rounded-2xl p-6 h-full hover:border-pink-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/10 flex flex-col">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30">
                                        <FaBook className="text-pink-500 text-xl" />
                                    </div>
                                    <span className="text-xs text-gray-400">
                                        <TimeAgo
                                            datetime={formattedDate(
                                                jn?.createdAt
                                            )}
                                        />
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-200 mb-3 line-clamp-2 group-hover:text-pink-400 transition-colors">
                                        {jn.title}
                                    </h3>

                                    <div className="text-gray-400 text-sm leading-relaxed line-clamp-4">
                                        {jn.desc.length > 120
                                            ? jn?.desc?.slice(0, 120) + "..."
                                            : jn?.desc}
                                    </div>
                                </div>

                                {/* Footer */}
                                <button
                                    onClick={() => {
                                        setShowModal(true);
                                        setCurrentJournal(jn);
                                    }}
                                    className="mt-6 inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 font-semibold text-sm transition-colors group-hover:gap-3">
                                    Read Full Story
                                    <IoIosArrowForward
                                        size={18}
                                        className="transition-transform"
                                    />
                                </button>
                            </div>
                        </motion.div>
                    ))
                ) : (
                    <motion.div
                        whileInView={{opacity: [0, 1]}}
                        transition={{duration: 0.5}}
                        initial={{opacity: 0}}
                        className="lg:col-span-4 md:col-span-3 sm:col-span-2">
                        <div className="flex flex-col items-center justify-center h-[50vh] text-center">
                            <div className="w-24 h-24 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full flex items-center justify-center mb-6">
                                <FaBook className="text-5xl text-pink-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-200 mb-2">
                                {searchTerm
                                    ? "No Journals Found"
                                    : "No Journals Yet"}
                            </h3>
                            <p className="text-gray-400 mb-6">
                                {searchTerm
                                    ? "Try adjusting your search terms"
                                    : "Be the first to share your thoughts with the community"}
                            </p>
                            <Link to="/dashboard/add-journal">
                                <button className="btn-primary px-8 py-3 rounded-xl shadow-lg hover:shadow-pink-500/50 transition-all inline-flex items-center gap-2">
                                    <FaPlus /> Write Your First Journal
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </div>

            {showModal && (
                <JournalModel
                    showModal={showModal}
                    setShowModal={setShowModal}
                    currentJournal={currentJournal}
                />
            )}
        </div>
    );
};

export default Journals;
