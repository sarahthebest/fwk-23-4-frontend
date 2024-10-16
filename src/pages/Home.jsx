import { useState } from 'react';
import { Chat, Message, Sidebar } from "@daniellaalolo/fwk-23-4-components";

const Home = () => {
    const [messages, setMessages] = useState([]);

    const handleSendMessage = async (userMessage) => {
        const newMessage = { type: 'user', text: userMessage };
        setMessages((prevMessages) => [...prevMessages, newMessage]);

        try {
            const response = await fetch("https://api-a6uj3err4a-uc.a.run.app/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    messages: [{ role: "user", content: userMessage }],
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            const assistantResponse = data.response;

            const aiMessage = { type: 'ai', text: assistantResponse };
            setMessages((prevMessages) => [...prevMessages, aiMessage]);
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    return (
        <div className="home flex-row">
            <Sidebar />
            <div className="chatWrapper flex-col">
                <Message messages={messages} />
                <Chat onSendMessage={handleSendMessage} />
            </div>
        </div>
    );
};

export default Home;
