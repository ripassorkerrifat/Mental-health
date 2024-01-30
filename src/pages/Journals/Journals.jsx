import React, {useEffect, useState} from "react";
import {useUserContext} from "../../context/AuthProvider";
import {config} from "../../utils/envCongif";
import TimeAgo from "timeago-react";
import {formattedDate} from "../../utils/formateDateTime";
import {IoIosArrowForward} from "react-icons/io";
import {motion} from "framer-motion";

const Journals = () => {
    const [journals, setJournals] = useState([]);
    const {user} = useUserContext();

    useEffect(() => {
        fetch(`${config.base_url}/journal`)
            .then((res) => res.json())
            .then((data) => {
                setJournals(data.data);
            });
    }, []);
    console.log(journals);
    return (
        <div className="container">
            <div className="grid lg:grid-cols-4  md:grid-cols-3  grid-cols-1 gap-10 py-20">
                {journals?.map((jn, i) => (
                    <motion.div
                        whileInView={{opacity: [0, 1], y: [0, -20]}}
                        transition={{duration: 0.7, delay: 0.4}}
                        key={i}
                        className="flex flex-col  bg-primary border shadow-sm rounded-lg md:p-0 p-5">
                        <div className="p-4 md:p-5">
                            <p className="text-xs text-right">
                                <TimeAgo
                                    datetime={formattedDate(jn?.createdAt)}
                                />
                            </p>
                            <h3 className="text-lg font-bold text-dark">
                                {jn.title}
                            </h3>

                            {jn.desc.length > 80
                                ? jn?.desc
                                      ?.slice(0, 95)
                                      ?.split("\n")
                                      .map((line, index) => (
                                          <p
                                              className="text-gray-700 text-base capitalize"
                                              key={index}>
                                              {line}
                                          </p>
                                      ))
                                : jn?.desc?.split("\n").map((line, index) => (
                                      <p
                                          className="text-gray-700 text-base capitalize"
                                          key={index}>
                                          {line}
                                      </p>
                                  ))}

                            <div className="mt-2  text-base font-semibold rounded-lg ">
                                <button
                                    type="submit"
                                    className="inline-flex items-center gap-x-1">
                                    <span> Read more</span>
                                    <IoIosArrowForward size={16} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Journals;
