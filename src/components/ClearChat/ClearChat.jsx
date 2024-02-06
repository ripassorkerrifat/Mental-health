import {useUserContext} from "../../context/AuthProvider";

const ClearChat = ({showModal, setShowModal, setMessages}) => {
    const {user} = useUserContext();
    const handleDelete = () => {
        fetch(`${config.base_url}/user/chat-with-ai/${user._id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setMessages([]);
                } else {
                    console.log(data);
                    return toast.error("Something went wrong");
                }
            });
    };
    return (
        <>
            {showModal && (
                <div className="justify-center items-center flex mb-20 ">
                    <div className="fixed inset-[20px] bottom-0 md:top-[250px] top-[180px] overflow-x-hidden overflow-y-auto z-[9999999] outline-none focus:outline-none ">
                        <div className="relative w-auto my-6 mx-auto max-w-2xl">
                            {/*content*/}
                            <div className=" rounded-lg shadow-lg relative text-gray-200 flex flex-col w-full bg-primary outline-none focus:outline-none">
                                <div className="flex flex-col  justify-center items-center py-20">
                                    <h3 className="text-xl font-semibold mb-4 ">
                                        Are you sure you want to delete this
                                        conversation?
                                    </h3>
                                    <div className="flex space-x-4">
                                        <button
                                            onClick={() => setShowModal(false)}
                                            className="btn-primary  bg-gray-500">
                                            Cancel
                                        </button>
                                        <button
                                            onClick={handleDelete}
                                            className="btn-primary">
                                            Confirm
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
                </div>
            )}
        </>
    );
};

export default ClearChat;
