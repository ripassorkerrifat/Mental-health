import OpenAI from "openai";
import {useEffect, useRef, useState} from "react";
import ChatLoad from "../../utils/ChatLoad";
import {IoSend, IoTrash} from "react-icons/io5";
import {useUserContext} from "../../context/AuthProvider";
import {config} from "../../utils/envCongif";
import {toast} from "react-hot-toast";
import ClearChat from "../../components/ClearChat/ClearChat";

const openai = new OpenAI({
    apiKey: config.open_ai_key,
    dangerouslyAllowBrowser: true,
});

const Chat = () => {
    const {user} = useUserContext();
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

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
            max_tokens: 150,
        });

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
                Authorization: `${localStorage.getItem("accessToken")}`,
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
                    setLoading(false);
                    return toast.error("Something went wrong");
                }
            });

        setLoading(false);
    };

    return (
        <div className="container py-16">
            {showModal && (
                <ClearChat
                    showModal={showModal}
                    setShowModal={setShowModal}
                    setMessages={setMessages}
                />
            )}
            
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-200 mb-2">
                    AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Chat Support</span>
                </h1>
                <p className="text-gray-400 text-lg">
                    Get instant support and guidance from our compassionate AI assistant
                </p>
            </div>

            <div className="max-w-6xl mx-auto">
                <div className="bg-gradient-to-br from-primary to-primary/80 border border-gray-700/50 rounded-3xl shadow-2xl overflow-hidden">
                    {/* Chat Header */}
                    <div className="bg-gradient-to-r from-pink-900/30 to-purple-900/30 border-b border-gray-700/50 p-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <img
                                        className="w-12 h-12 rounded-full border-2 border-pink-500"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPd1EkuNsW2EEHMjTRr9Dhw-FkGjOmFUgVtw&usqp=CAU"
                                        alt="AI Assistant"
                                    />
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-primary rounded-full"></div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-200">Mental Health AI</h3>
                                    <p className="text-sm text-gray-400">Always here to help</p>
                                </div>
                            </div>
                            {messages?.length >= 2 && (
                                <button
                                    onClick={() => setShowModal(true)}
                                    className="px-4 py-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30 transition-all inline-flex items-center gap-2">
                                    <IoTrash size={18} />
                                    Clear Chat
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Messages Area */}
                    <form onSubmit={handleSubmit}>
                        <div className="overflow-y-auto h-[60vh] p-6 space-y-4">
                            {messages?.map((message, index) => (
                                <div key={index}>
                                    {message.role === "user" && (
                                        <div className="flex justify-end items-end gap-3 animate-fade-in">
                                            <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 px-5 rounded-2xl rounded-br-sm max-w-2xl shadow-lg">
                                                <p className="text-base leading-relaxed">{message.content}</p>
                                            </div>
                                            <img
                                                className="w-10 h-10 rounded-full object-cover border-2 border-pink-500"
                                                src={user?.avatar || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"}
                                                alt="You"
                                            />
                                        </div>
                                    )}
                                    
                                    {message?.role === "assistant" && (
                                        <div className="flex justify-start items-end gap-3 animate-fade-in">
                                            <img
                                                className="w-10 h-10 rounded-full object-cover border-2 border-purple-500"
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPd1EkuNsW2EEHMjTRr9Dhw-FkGjOmFUgVtw&usqp=CAU"
                                                alt="AI"
                                            />
                                            <div className="bg-primary/60 border border-gray-700/50 text-gray-200 py-3 px-5 rounded-2xl rounded-bl-sm max-w-2xl shadow-lg">
                                                {message?.content?.split("\n")?.map((line, idx) => (
                                                    <p key={idx} className="text-base leading-relaxed">
                                                        {line}
                                                        {idx < message?.content?.split("\n").length - 1 && <br />}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                            
                            {!messages?.length && (
                                <div className="flex items-center justify-center flex-col text-gray-300 h-full text-center">
                                    <div className="w-24 h-24 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full flex items-center justify-center mb-6">
                                        <img
                                            className="w-16 h-16 rounded-full"
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPd1EkuNsW2EEHMjTRr9Dhw-FkGjOmFUgVtw&usqp=CAU"
                                            alt="AI"
                                        />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-3">
                                        Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Mental Health AI</span>
                                    </h3>
                                    <p className="text-xl text-gray-400 mb-6">
                                        I'm here to listen and support you. How can I assist you today?
                                    </p>
                                    <div className="flex flex-wrap gap-3 justify-center">
                                        <button type="button" className="px-4 py-2 bg-primary/60 border border-gray-700/50 rounded-lg hover:border-pink-500/30 transition-all text-sm">
                                            Feeling anxious
                                        </button>
                                        <button type="button" className="px-4 py-2 bg-primary/60 border border-gray-700/50 rounded-lg hover:border-pink-500/30 transition-all text-sm">
                                            Need motivation
                                        </button>
                                        <button type="button" className="px-4 py-2 bg-primary/60 border border-gray-700/50 rounded-lg hover:border-pink-500/30 transition-all text-sm">
                                            Stress management
                                        </button>
                                    </div>
                                </div>
                            )}
                            
                            {loading && <ChatLoad />}
                            <div ref={scrollRef}></div>
                        </div>

                        {/* Input Area */}
                        <div className="border-t border-gray-700/50 p-6 bg-primary/30">
                            <div className="flex gap-3">
                                <input
                                    type="text"
                                    name="prompt"
                                    className="flex-1 py-4 px-5 border text-gray-200 text-base bg-primary/60 focus:outline-none focus:border-pink-500 border-gray-700 rounded-xl transition-colors placeholder:text-gray-500"
                                    placeholder="Type your message here..."
                                    disabled={loading}
                                />
                                <button
                                    disabled={loading}
                                    type="submit"
                                    className="px-6 py-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-xl shadow-lg hover:shadow-pink-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                                    <IoSend size={24} />
                                </button>
                            </div>
                            <p className="text-xs text-gray-500 mt-3 text-center">
                                AI can make mistakes. Please verify important information.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Chat;
