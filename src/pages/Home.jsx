import { Message, Sidebar, Chat } from "@daniellaalolo/fwk-23-4-components"; // Adjust import based on your structure
import { useState } from "react";

const Home = () => {
    const [messages, setMessages] = useState([]);

    const handleSendMessage = (userMessage) => {
        setMessages((prevMessages) => [
            ...prevMessages,
            { type: 'user', text: userMessage },
        ]);
    };

    const handleReceiveResponse = (response) => {
        setMessages((prevMessages) => [
            ...prevMessages,
            { type: 'assistant', text: response },
        ]);
    };

    return (
        <div className="home flex-row">
            <Sidebar />
            <div className="chatWrapper flex-col">
                <Message messages={messages} />
                <Chat 
                    onReceiveResponse={handleReceiveResponse} 
                    onSendMessage={handleSendMessage} 
                />
            </div>
        </div>
    );
};

export default Home;
