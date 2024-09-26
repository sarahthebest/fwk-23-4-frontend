import { Sidebar, TodoBoard } from "@sarahthebest/fwk-23-4-components";

const ToDoPage = () => {
    return (
        <div className="toDoPage flex-row">
            <Sidebar />
            <TodoBoard />
        </div>
    );
}

export default ToDoPage;