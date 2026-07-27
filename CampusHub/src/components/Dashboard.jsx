import TaskSection from "./TaskSection";

function Dashboard({ studentName, tasks, dispatch, editTask }) {
    return (
        <div>
            <h2>Dashboard Component</h2>

            <TaskSection
                tasks={tasks}
                dispatch={dispatch}
                editTask={editTask}
                studentName={studentName}
            />
        </div>
    );
}

export default Dashboard;