import {ImCancelCircle} from "react-icons/im";

export default function BreathingDetails({
    currentData,
    showModal,
    setShowModal,
}) {
    return (
        <>
            {showModal && (
                <div className="justify-center items-center flex mb-20 ">
                    <div className="fixed inset-[20px] bottom-0 md:top-[88px] top-[80px] overflow-x-hidden overflow-y-auto z-[9999999] outline-none focus:outline-none ">
                        <div className="relative w-auto my-6 mx-auto max-w-5xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between md:px-10 p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-2xl font-semibold text-dark">
                                        {currentData.title}
                                    </h3>
                                    <button
                                        className="p-1 ml-auto  float-right text-2xl  leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}>
                                        <ImCancelCircle className="text-dark" />
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative md:px-10 p-5 flex-auto text-gray-800">
                                    <div>
                                        <p className=" text-lg leading-relaxed">
                                            <b>Introduction : </b>{" "}
                                            {currentData?.desc}
                                        </p>
                                        {currentData?.preoces?.map((s, i) => (
                                            <li className=" text-lg  leading-relaxed mb-2">
                                                <b>{s.step}:</b> {s.desc}
                                            </li>
                                        ))}
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end  border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="font-bold uppercase px-6 py-2 text-base outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}>
                                        <span>Close</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
                </div>
            )}
        </>
    );
}
