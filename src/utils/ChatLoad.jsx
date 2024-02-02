import React from "react";

const ChatLoad = () => {
    return (
        <div>
            <div className="flex justify-start items-center mb-4">
                <img
                    className="w-8 h-8 mr-2 rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPd1EkuNsW2EEHMjTRr9Dhw-FkGjOmFUgVtw&usqp=CAU"
                    alt="Sender"
                />
                <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full animate-pulse bg-gray-500"></div>
                    <div className="w-3 h-3 rounded-full animate-pulse bg-gray-500"></div>
                    <div className="w-3 h-3 rounded-full animate-pulse bg-gray-500"></div>
                </div>
            </div>
        </div>
    );
};

export default ChatLoad;
