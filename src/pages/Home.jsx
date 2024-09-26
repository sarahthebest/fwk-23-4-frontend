import { Chat, Message, Sidebar } from "@sarahthebest/fwk-23-4-components";

const Home = () => {
    return (
        <div className="home flex-row">
            <Sidebar />
            <div className="chatWrapper flex-col">
                <Message />
                <Chat />
            </div>

        </div>
    );
}

export default Home;