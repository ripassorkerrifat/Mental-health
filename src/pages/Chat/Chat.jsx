import OpenAI from "openai";
import {useEffect, useRef, useState} from "react";
import ChatLoad from "../../utils/ChatLoad";
import {IoSend} from "react-icons/io5";
import {useUserContext} from "../../context/AuthProvider";
import {config} from "../../utils/envCongif";
import {toast} from "react-hot-toast";
import {AiOutlineClear} from "react-icons/ai";

const openai = new OpenAI({
    apiKey: config.open_ai_key,
    dangerouslyAllowBrowser: true,
});

const Chat = () => {
    const {user} = useUserContext();
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (user) {
            setMessages(user.chat);
        }
    }, [user]);

    const scrollRef = useRef(null);
    // Scroll to the bottom when messages change
    useEffect(() => {
        scrollRef?.current?.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
        });
    }, [messages]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const pmt = e.target.prompt.value;
        const promptvalue = pmt;

        const userPrompt = {
            role: "user",
            content: promptvalue,
        };
        setLoading(true);
        setMessages((prevMessages) => [...prevMessages, userPrompt]);
        e.target.reset();
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [userPrompt], // Pass the user's prompt to the API
            max_tokens: 20,
        });

        setLoading(false);

        const postData = {
            data: [
                {
                    role: "user",
                    content: promptvalue,
                },
                {
                    role: "assistant",
                    content: response.choices[0].message.content,
                },
            ],
        };

        fetch(`${config.base_url}/user/chat-with-ai/${user._id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setMessages((prevMessages) => [
                        ...prevMessages,
                        response.choices[0].message,
                    ]);
                } else {
                    console.log(data);
                    return toast.error("Something went wrong");
                }
            });
    };

    const handleClear = () => {
        const aggre = window.confirm(
            "Are you sure you want to clear conversion"
        );
        if (aggre) {
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
        }
    };

    return (
        <div className="my-10 text-base">
            <div className="max-w-6xl mx-auto  shadow-lg border border-gray-800 rounded-md p-4">
                {messages?.length ? (
                    <>
                        <button
                            onClick={handleClear}
                            className="inline-flex text-gray-200  items-center text-lg mb-2 ">
                            <span>Clear chat </span>{" "}
                            <AiOutlineClear className="ml-2" />
                        </button>
                    </>
                ) : (
                    <></>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="overflow-y-auto h-[60vh] text-lg ">
                        {messages?.map((message, index) => (
                            <div key={index}>
                                {" "}
                                {message.role == "user" && (
                                    <div className="flex justify-end items-center mb-7">
                                        <div className="bg-gray-700 text-gray-200 py-2 px-4 rounded-l-lg rounded-r-lg max-w-3xl">
                                            {message.content}
                                        </div>
                                        {user?.avatar ? (
                                            <img
                                                className="w-8 h-8 ml-2 rounded-full"
                                                src={user.avatar}
                                                alt="Sender"
                                            />
                                        ) : (
                                            <img
                                                className="w-8 h-8 ml-2 rounded-full"
                                                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                                                alt="Sender"
                                            />
                                        )}
                                    </div>
                                )}
                                {/* <!-- Receiver's message --> */}
                                {message?.role == "assistant" && (
                                    <div className="flex justify-start items-center mb-5">
                                        <img
                                            className="w-8 h-8 mr-2 rounded-full"
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPd1EkuNsW2EEHMjTRr9Dhw-FkGjOmFUgVtw&usqp=CAU"
                                            alt="Sender"
                                        />
                                        <div className="bg-primary text-gray-200 p-4 rounded-l-lg rounded-r-lg max-w-3xl">
                                            {message?.content
                                                ?.split("\n")
                                                ?.map((line, index) => (
                                                    <p key={index}>
                                                        {line}
                                                        <br />
                                                    </p>
                                                ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                        {!messages?.length && (
                            <div className="flex items-center justify-center flex-col text-gray-300 mt-20 text-center">
                                <img
                                    className="w-20 h-20 rounded-full"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPd1EkuNsW2EEHMjTRr9Dhw-FkGjOmFUgVtw&usqp=CAU"
                                    alt=""
                                />{" "}
                                <div>
                                    <p className="text-3xl">
                                        <span>
                                            Welcome to mental health chat bot
                                        </span>
                                    </p>
                                    <p className="text-xl italic">
                                        How can I assist you today?
                                    </p>
                                </div>
                            </div>
                        )}
                        {loading && <ChatLoad />}
                        <div ref={scrollRef}></div>
                    </div>

                    {/* <!-- Input area --> */}
                    <div className="mt-4 flex">
                        <input
                            type="text"
                            name="prompt"
                            className="flex-1 py-2 px-4 border text-gray-300 text-lg bg-primary focus:outline-none focus:border-gray-700 border-gray-800 rounded-md"
                            placeholder="Type your message..."
                        />
                        <button
                            disabled={loading}
                            type="submit"
                            className="text-gray-200 ml-4">
                            <IoSend size={30} />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Chat;
